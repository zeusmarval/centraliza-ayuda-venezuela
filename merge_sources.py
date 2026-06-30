import tools.merge_sources as merge_proccess
import tools.sync_from_sheets as sync_process



if __name__ == "__main__":
    
    sync_process.get_sheet_sources()
    merge_proccess.merge_sources()