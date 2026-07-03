
class ApiManager {

    #apiSettings;

    #allUniqueTags = null;
    #sitesByTag = null;

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

        return { data: this.#sites() };
    }

    getTags = async (payload) => {
        
        const tags = this.#tags();
        return {data: tags}
    }

    seachForSites = async (payload) => {

        
        
        const textToSearch = payload.textToSearch != null ? payload.textToSearch : null;
        const selectedTags = payload.tags != null ? payload.tags : [];
        
        let sites;
        if (selectedTags.length > 0 ) {
            sites = this.#siteGroupByTag(selectedTags);
        }
        else {
            sites = this.#sites();
        }

        if (textToSearch == null) {
            return  { data:sites};
        }
        
        const escapedText = this.#normalizeText(textToSearch);
        const containtWordRegex = new RegExp(escapedText, "i");
        
        const matches = sites.filter((item) => {
            
            const name = item.nombre ?? '';
            const description = item.descripcion ?? '';
            const tags = item.tags ?? [];

            return containtWordRegex.test(this.#normalizeText(name)) ||
                   containtWordRegex.test(this.#normalizeText(description)) ||
                   tags.some((tag) => containtWordRegex.test(this.#normalizeText(tag)));
        });

        return { data: matches };
    }

    #sites = () => {

        return SOURCES; 
    }

    #tags = () => {
        
        if(this.#allUniqueTags==null){
            const sites = this.#sites();
            
            const allTags = sites
                .map((item) => {
                    return item.tags != null ? item.tags : [];
                })
                .flatMap((item) => item)
            ;

            this.#allUniqueTags = [...new Set(allTags)].sort();
        }
        return this.#allUniqueTags;
    }

    #siteGroupByTag(searchTags) {
        
        this.#initSiteGroupByTag();
        const tempResultSet = {};
        searchTags.forEach((tag) => {
            let groupSite = this.#sitesByTag[tag];
            if(groupSite == null) {
                groupSite = [];
            }
            groupSite.forEach((site) => {
                tempResultSet[site.id] = site;
            });
        });
        
        const resultSet = Object.values(tempResultSet).sort((a,b) => a.id - b.id);
        return resultSet;
    }

    #initSiteGroupByTag = () => {
       
        if(this.#sitesByTag == null) {
            this.#sitesByTag = {};
            const allTags = this.#tags();
            const sites = this.#sites();
            allTags.forEach((tagItem) => {
                
                sites.forEach( (siteItem) => {
                    const tags = siteItem.tags != null ? siteItem.tags : [];
                    if( tags.includes(tagItem)) {
                        let groupSite = this.#sitesByTag [tagItem];
                        if(groupSite == null) {
                            groupSite = []
                        }
                        groupSite.push(siteItem);
                        this.#sitesByTag[tagItem] = groupSite;
                    }
                });
            });
        }
    }

    
    #normalizeText = (text) => {
        
        const withoutDiacritics = text
            .replace(/ñ/g, '\u0000ñ')
            .replace(/Ñ/g, '\u0000Ñ')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/\u0000ñ/g, 'ñ')
            .replace(/\u0000Ñ/g, 'Ñ');
        
        return withoutDiacritics.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
}
