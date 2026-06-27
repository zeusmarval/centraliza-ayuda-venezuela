function main() {

   const apiSettings = {
      "baseUrl":"http://localhost:3000"
   };
   
   const apiManager = new ApiManager(apiSettings);
   const viewManager = new View(document);
   
   const payload = {};
   
   
   apiManager.getSites(payload)
        .then((res) => {
                        
            viewManager.cleanView();
            viewManager.showResult(res.data);
        })
        .catch((err) => {
           
            console.error(err);
            viewManager.showError("No se pudieron cargar los datos del directorio. Por favor, intente de nuevo más tarde.");
        })
        .finally(() => {
            
        });

   // ==========================
   const searchText = document.getElementById("search-text-input");
   const searchTextSpinner = document.getElementById("search-text-spinner");
   const searchText = new SeachText({
        "searchTextInput":searchText,
        "spinnerElement":searchTextSpinner,
        "debounceDelay":300
   });
   
   searchText.setOnValueChangeListener((value) => {
        searchText.showLoading(true);
        apiManager.seachForSites({"textToSearch":value})
            .then((res) => {
                viewManager.cleanView();
                if(res.data.length > 0) {
                    viewManager.showResult(res.data);
                }
                else{
                    // no se encontraron coincidencias
                }
            })
            .catch((err) => {
                console.error(err);
                viewManager.showError("No se pudieron cargar los datos del directorio. Por favor, intente de nuevo más tarde.");
            })
            .finally(() => {
                searchText.showLoading(false);
            });
   });
}

window.addEventListener("load", main);