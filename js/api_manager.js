
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

    seachForSites = async (payload) => {

        
        const sites = this.#sites();
        const matches = [];
        const textToSearch = payload.textToSearch != null ? payload.textToSearch:null;
        
        if(textToSearch == null) {
            return sites;
        }
        const containtWordRegex = new RegExp(textToSearch, "i"); 
        sites.forEach((item) => {
            
            const searchArray = [];
            const name = item.nombre.toLowerCase();
            const description = item.descripcion.toLowerCase();
            let tags = item.tags != null ? item.tags : [];
            tags = tags.map( (item) => item.toLowerCase())
            searchArray.push(name);
            searchArray.push(description);
            searchArray.push(...tags); 
            searchArray.forEach((searchTerm) => {

                if(containtWordRegex.test(searchTerm)) {
                    matches.push(item);
                    break;
                }
            });
        });

        return matches;
    }

    #sites = () => {

        return { data: SOURCES };
    }
}
