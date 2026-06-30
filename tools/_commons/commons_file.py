
#constants
DEFAULT_INPUT_PATH:str = "data_source_helper/new_sources.json"
DEFALUT_PLAIN_DATA:str = "data_source_helper/plain_sources.json"
DEFAULT_OUTPUT_PATH:str = "js/data_source_json.js"
CSV_URL = "https://docs.google.com/spreadsheets/d/1mGy8Uem-W458lJTpFO2FqU8neus2gdJ6JAm6Wva2t5Q/export?format=csv&gid=725809850"

# functions
def write_text_to_file(output_path:str,content:str):
    myFileStrem = open(output_path,'w', encoding='utf-8')
    myFileStrem.write(content)
    myFileStrem.close()