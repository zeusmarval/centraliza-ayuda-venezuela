import csv
import json
import urllib.request
import ssl


from ._commons import commons_file as commons

#Este script se encarga de descargar el CSV desde Google Sheets del Directorio Venezuela Renacer, parsearlo y guardarlo en un archivo JSON local. Luego ejecuta el script de consolidación para combinarlo con otras fuentes.


def fetch_sheet_data_csv(source:str):
    
    context = ssl._create_unverified_context()
    lines = []
    try:
        response = urllib.request.urlopen(source, context=context)
        lines = [line.decode('utf-8') for line in response.readlines()]
    except Exception as e:
        print(f"Error descargando el CSV: {e}")
    
    return csv.reader(lines)



def parse_csv_to_json(csvContent):
   
    headers_found = False
    sources = []
    
    MIN_COLUMNS = 4
    COLUMN_NAME_TITLE = "nombre"
    NAME_COLUMN_INDEX = 0
    CATEGORIES_COLUMN_INDEX = 1
    URL_COLUMN_INDEX = 2
    OBJECTIVE_COLUMN_INDEX = 3

    for row in csvContent:
        if not row:
            continue
        
        if not headers_found:
            header_mark = str(row[NAME_COLUMN_INDEX]).strip().lower()
            if  header_mark == COLUMN_NAME_TITLE:
                headers_found = True
            continue
            
        if len(row) >= MIN_COLUMNS:
            
            name = str(row[NAME_COLUMN_INDEX]).strip()
            url = str(row[URL_COLUMN_INDEX]).strip()
            
            if not name or not url:
                continue
                
            
            description =  str(row[OBJECTIVE_COLUMN_INDEX]).strip()
            
            raw_cats = str(row[CATEGORIES_COLUMN_INDEX]).strip()
            tags =  [c.strip() for c in raw_cats.split(",")]
            
            sources.append({
                "nombre": name,
                "url": url,
                "descripcion": description,
                "tags": tags
            })
            
    return sources


def get_sheet_sources():
    
    sheets_sources = fetch_sheet_data_csv(commons.CSV_URL) 
    sheets_sources:list[dict] = parse_csv_to_json(sheets_sources)
    json_str = json.dumps(sheets_sources,indent=4, ensure_ascii=False)
    commons.write_text_to_file(commons.DEFAULT_INPUT_PATH,json_str)

if __name__ == "__main__":
    get_sheet_sources()()
