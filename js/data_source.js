
class ApiManager {

    #apiSettings;

    static METHODS = Object.freeze({
        "GET": "GET",
        "POST": "POST",
    });

    constructor(apiSettings) {
        this.#apiSettings = apiSettings;
    }

    getSites = async (payload) => {

        /*
        // Future backend integration — uncomment when API is available
        const SUBMIT_PATH = "/api/sites";
        const url = `${this.#apiSettings.baseUrl}${SUBMIT_PATH}`;
        const response = await fetch(url, {
            method: ApiManager.METHODS.GET,
            headers: { "Content-Type": "application/json" }
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        return response.json();
        */

        return this.#sites();
    }

    #sites = () => {

        return {
            data: [
                {
                    id: 1,
                    nombre: "Hospitales en Venezuela",
                    url: "https://hospitalesenvenezuela.com/",
                    descripcion: "Aplicación para encontrar a quien está ingresado en un hospital o centro de salud en Venezuela"
                },
                {
                    id: 2,
                    nombre: "Desaparecidos Terremoto Venezuela",
                    url: "https://desaparecidosterremotovenezuela.com/",
                    descripcion: "Portal para reportar y buscar personas desaparecidas tras el terremoto en Venezuela"
                },
                {
                    id: 3,
                    nombre: "Venezuela Solidaria",
                    url: "https://venezuelasolidaria.org/",
                    descripcion: "Red de apoyo comunitario para coordinar donaciones y voluntariado en todo el país"
                },
                {
                    id: 4,
                    nombre: "Farmacias de Turno Venezuela",
                    url: "https://farmaciasdeturno.ve/",
                    descripcion: "Consulta las farmacias de guardia abiertas en tu ciudad y disponibilidad de medicamentos"
                }
            ]
        };
    }
}
