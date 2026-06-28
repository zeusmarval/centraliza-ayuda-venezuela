- Se requiere python 3.11.0 o superior para añadir nuevas fuentes de datos
- Llena el array en `data_source_helper/new_sources.json` siguiendo esta estructura:
  ```json
  [
      {
          "nombre": "Nombre del sitio",
          "url": "https://www.ejemplo.com/ruta",
          "descripcion": "Breve descripción de lo que hace el sitio",
          "tags": ["Salud y Emergencia", "Voluntariado"]
      }
  ]
  ```
- **Reglas de procesamiento (`merge_sources.py`)**:
  - **Deduplicación:** Se valida la URL completa (incluyendo su path/ruta). Si existe `sitio.com/ruta1` e ingresas `sitio.com/ruta1/ruta2`, se tomarán como sitios distintos. Sólo se ignora si la URL normalizada es *exactamente* igual a una ya existente.
  - **Normalización:** Se limpian los parámetros de rastreo de marketing (ej. `utm_`, `fbclid`) y slashes duplicados automáticamente.
  - **Fusión:** Se le asigna un `id` secuencial a los nuevos registros, se insertan en `plain_sources.json` y se compila el archivo `js/data_source_json.js` que lee la web. Por último, se vacía el `new_sources.json` para nuevos aportes.
- Ejecuta en la terminal `py merge_sources.py` (o `python merge_sources.py`)
- Manda tu pull request