import csv
import json
import urllib.request
import ssl
import sys
import subprocess
import os

#Este script se encarga de descargar el CSV desde Google Sheets del Directorio Venezuela Renacer, parsearlo y guardarlo en un archivo JSON local. Luego ejecuta el script de consolidación para combinarlo con otras fuentes.
#Link del Directorio Venezuela Renacer: https://docs.google.com/spreadsheets/d/1mGy8Uem-W458lJTpFO2FqU8neus2gdJ6JAm6Wva2t5Q/edit?pli=1&gid=725809850#gid=725809850

# Configuración
CSV_URL = "https://docs.google.com/spreadsheets/d/1mGy8Uem-W458lJTpFO2FqU8neus2gdJ6JAm6Wva2t5Q/export?format=csv&gid=725809850"
SHEETS_SOURCES_PATH = "data_source_helper/sheets_sources.json"

# Path del script de unión de fuentes
MERGE_SCRIPT_PATH = "merge_sources.py"

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

def fetch_and_parse_csv():
    # Ignorar errores de certificado SSL locales al hacer la petición
    context = ssl._create_unverified_context()
    
    try:
        response = urllib.request.urlopen(CSV_URL, context=context)
        lines = [line.decode('utf-8') for line in response.readlines()]
    except Exception as e:
        print(f"Error descargando el CSV: {e}")
        sys.exit(1)

    reader = csv.reader(lines)
    
    headers_found = False
    new_sources = []
    
    for row in reader:
        if not row:
            continue
        
        if not headers_found:
            if row[0].strip().lower() == "nombre":
                headers_found = True
            continue
            
        if len(row) >= 4:
            nombre = row[0].strip()
            enlace = row[2].strip()
            
            if not nombre or not enlace:
                continue
                
            categorias = row[1].strip()
            objetivo = row[3].strip()
            
            tags = get_mapped_tags(categorias)
            
            new_sources.append({
                "nombre": nombre,
                "url": enlace,
                "descripcion": objetivo,
                "tags": tags
            })
            
    return new_sources

def save_to_sheets_sources(data):
    # Sobreescribimos el archivo completo ya que es el estado actual de Google Sheets
    with open(SHEETS_SOURCES_PATH, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4, ensure_ascii=False)
        
    print(f"Se han extraído {len(data)} registros y guardado en {SHEETS_SOURCES_PATH}.")

def run_merge_script():
    print(f"Ejecutando {MERGE_SCRIPT_PATH} para consolidar...")
    result = subprocess.run([sys.executable, MERGE_SCRIPT_PATH], capture_output=True, text=True, cwd=os.path.dirname(os.path.abspath(__file__)))
    if result.returncode == 0:
        print("Consolidación exitosa.")
        if result.stdout:
            print(result.stdout)
    else:
        print(f"Hubo un error al consolidar:\n{result.stderr}")

def main():
    print("Obteniendo datos de Google Sheets...")
    sheets_sources = fetch_and_parse_csv()
    
    if not sheets_sources:
        print("No se encontraron registros válidos para importar.")
        return
        
    save_to_sheets_sources(sheets_sources)
    run_merge_script()
    print("Proceso finalizado.")

if __name__ == "__main__":
    main()
