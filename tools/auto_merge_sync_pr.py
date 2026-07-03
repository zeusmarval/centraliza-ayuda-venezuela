#!/usr/bin/env python3
import json
import os
import sys
import time
import urllib.error
import urllib.request

# constants
EXPECTED_HEAD_REF:str = "automatic_sync"
EXPECTED_BASE_REF:str = "master"
EXPECTED_AUTHOR:str = "github-actions[bot]"
EXPECTED_TITLE_PREFIX:str = "sync: "
MAX_RETRIES:int = 2
RETRY_DELAY:int = 5
APPROVAL_BODY:str = "Aprobación automática por Auto-Merge Workflow (sync_sheet.yml sync PR)"
API_BASE:str = "https://api.github.com"


def github_api(request:dict, body:dict|None = None) -> dict|None:
    # request = {"method": str, "endpoint": str, "token": str}
    url = f"{API_BASE}{request['endpoint']}"
    headers = {
        "Authorization": f"Bearer {request['token']}",
        "Accept": "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
    }
    data = json.dumps(body).encode("utf-8") if body else None
    if data:
        headers["Content-Type"] = "application/json"
    req = urllib.request.Request(url, data=data, headers=headers, method=request["method"])
    with urllib.request.urlopen(req) as resp:
        if resp.status == 204:
            return None
        return json.loads(resp.read().decode("utf-8"))


def format_commit_message(title:str, pr_number:str) -> str:
    return f"{title} (#{pr_number})"


def retry(fn, max_retries:int = MAX_RETRIES, delay:int = RETRY_DELAY):
    last_exception = None
    for attempt in range(max_retries + 1):
        try:
            return fn()
        except Exception as e:
            last_exception = e
            if attempt < max_retries:
                print(f"::warning::Attempt {attempt + 1} failed: {e}. Retrying in {delay}s...")
                time.sleep(delay)
    raise last_exception

def validate_pr(pr_data:dict) -> dict:
    # pr_data = {"head_ref": str, "base_ref": str, "author": str, "title": str}
    # Returns {"is_valid": bool, "failures": list[str]}
    failures = []
    if pr_data["head_ref"] != EXPECTED_HEAD_REF:
        failures.append(f"head branch is '{pr_data['head_ref']}', expected '{EXPECTED_HEAD_REF}'")
    if pr_data["base_ref"] != EXPECTED_BASE_REF:
        failures.append(f"base branch is '{pr_data['base_ref']}', expected '{EXPECTED_BASE_REF}'")
    if pr_data["author"] != EXPECTED_AUTHOR:
        failures.append(f"author is '{pr_data['author']}', expected '{EXPECTED_AUTHOR}'")
    if not pr_data["title"].startswith(EXPECTED_TITLE_PREFIX):
        failures.append(f"title '{pr_data['title']}' does not start with '{EXPECTED_TITLE_PREFIX}'")
    return {"is_valid": len(failures) == 0, "failures": failures}


def check_pr_state(pr_number:str, api_config:dict) -> str:
    # api_config = {"repo": str, "token": str}
    # Returns "open", "closed", or "merged"
    request = {"method": "GET", "endpoint": f"/repos/{api_config['repo']}/pulls/{pr_number}", "token": api_config["token"]}
    resp = github_api(request)
    if resp.get("merged"):
        return "merged"
    return resp["state"]


def approve_pr(pr_number:str, api_config:dict) -> None:
    # api_config = {"repo": str, "token": str}
    request = {"method": "POST", "endpoint": f"/repos/{api_config['repo']}/pulls/{pr_number}/reviews", "token": api_config["token"]}
    github_api(request, {
        "event": "APPROVE",
        "body": APPROVAL_BODY,
    })


def merge_pr(merge_data:dict, api_config:dict) -> None:
    # merge_data = {"pr_number": str, "commit_message": str}
    # api_config = {"repo": str, "token": str}
    request = {"method": "PUT", "endpoint": f"/repos/{api_config['repo']}/pulls/{merge_data['pr_number']}/merge", "token": api_config["token"]}
    github_api(request, {
        "commit_title": merge_data["commit_message"],
        "merge_method": "merge",
    })


def main(pr_data:dict, api_config:dict) -> int:
    # pr_data = {"pr_number": str, "head_ref": str, "base_ref": str, "author": str, "title": str}
    # api_config = {"repo": str, "token": str}

    # 1. Validate
    result = validate_pr(pr_data)
    if not result["is_valid"]:
        for f in result["failures"]:
            print(f"::notice::Validation failed: {f}")
        return 0

    # 2. Check state
    try:
        state = retry(lambda: check_pr_state(pr_data["pr_number"], api_config))
    except urllib.error.HTTPError as e:
        print(f"::error::Failed to check PR state: HTTP {e.code}")
        return 1
    except Exception as e:
        print(f"::error::Failed to check PR state: {e}")
        return 1

    if state in ("merged", "closed"):
        print(f"::notice::PR #{pr_data['pr_number']} is already {state}. Skipping.")
        return 0

    # 3. Approve
    try:
        retry(lambda: approve_pr(pr_data["pr_number"], api_config))
    except urllib.error.HTTPError as e:
        if e.code == 403:
            print(f"::error::Permission denied during approval (403)")
        else:
            print(f"::error::Approval failed: HTTP {e.code}")
        return 1
    except Exception as e:
        print(f"::error::Approval failed: {e}")
        return 1

    # 4. Merge
    commit_msg = format_commit_message(pr_data["title"], pr_data["pr_number"])
    merge_data = {"pr_number": pr_data["pr_number"], "commit_message": commit_msg}
    try:
        retry(lambda: merge_pr(merge_data, api_config))
    except urllib.error.HTTPError as e:
        print(f"::error::Approval succeeded but merge failed: HTTP {e.code}")
        if e.code == 409:
            print("::error::Merge failed due to conflicts (409)")
        return 1
    except Exception as e:
        print(f"::error::Approval succeeded but merge failed: {e}")
        return 1

    print(f"::notice::PR #{pr_data['pr_number']} merged successfully.")
    return 0


if __name__ == "__main__":
    pr_data:dict = {
        "pr_number": sys.argv[1],
        "head_ref": sys.argv[2],
        "base_ref": sys.argv[3],
        "author": sys.argv[4],
        "title": sys.argv[5],
    }
    api_config:dict = {
        "repo": sys.argv[6],
        "token": os.environ["GH_TOKEN"],
    }

    sys.exit(main(pr_data, api_config))
