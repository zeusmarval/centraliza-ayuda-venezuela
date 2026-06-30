import csv
import json
import urllib.request
import ssl


from ._commons import commons_file as commons

#Este script se encarga de descargar el CSV desde Google Sheets del Directorio Venezuela Renacer, parsearlo y guardarlo en un archivo JSON local. Luego ejecuta el script de consolidación para combinarlo con otras fuentes.


# Mapeo de categorías del Google Sheet a etiquetas locales
# Ahora cada llave mapea a una lista de etiquetas de las categorías para respetar la lógica de ambas fuentes. Si una categoría no tiene mapeo, se mantiene tal cual.
TAG_MAPPING = {
    "Desaparecidos": ["Búsqueda de Personas"],
    "Encontrados": ["Búsqueda de Personas"],
    "Atendidos en Hospitales": ["Búsqueda de Personas"],
    "Ente Oficial": [],  # Se omite
    "Servicios": ["Información General"],
    "Refugios": ["Refugios y Alojamiento"],
    "Ayuda General": ["Información General", "Comunicaciones"],
    "Donaciones": ["Acopios y Donaciones"],
    "Centros de Acopio": ["Acopios y Donaciones"],
    "Mascotas y Animales": ["Mascotas"],
    "Daños Estructurales": ["Infraestructura y Riesgos"],
    "Rescate y Apoyo Físico": ["Salud y Emergencia"],
    "Transporte y Logística": ["Salud y Emergencia"],
    "Psicología y Salud General": ["Salud y Emergencia"],
    "Voluntarios": ["Voluntariado"],
    "Recursos y Herramientas": ["Mapas y Tecnología"]
}

def get_mapped_tags(categories_str):
    if not categories_str:
        return []
    
    # Algunas celdas pueden tener múltiples categorías separadas por coma
    raw_cats = [c.strip() for c in categories_str.split(",")]
    
    mapped_tags = set()
    for cat in raw_cats:
        if not cat:
            continue
        
        mapped_tags_list = TAG_MAPPING.get(cat)
        if mapped_tags_list is not None:
            # Añadimos todas las etiquetas mapeadas (pueden ser 0, 1 o más)
            for mt in mapped_tags_list:
                mapped_tags.add(mt)
        else:
            # Si no hay mapeo, mantenemos la original
            mapped_tags.add(cat)
            
    return list(mapped_tags)


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
                
            tags = str(row[CATEGORIES_COLUMN_INDEX]).strip()
            description =  str(row[OBJECTIVE_COLUMN_INDEX]).strip()
            
            tags = get_mapped_tags(tags)
            
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
