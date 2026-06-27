class SeachText {

    #searchText;
    #spinnerElement;
    #debounceDelay;
    #searchTimeout = null;
    
    #previusValue = null;

    #onValueChangeListener = null;

    constructor(config) {

        this.#searchText = config.searchTextInput;
        this.#spinnerElement = config.spinnerElement;
        this.#debounceDelay = config.debounceDelay != null ? config.debounceDelay: 300;
        this.#searchText.addEventListener("input", this.#onInputHandler);
    }

    showLoading(isLoading) {
        //this.#spinnerElement.classList.toggle("is-active", isLoading);
        //this.#searchText.setAttribute("aria-busy", `${isLoading}`);
        if(isLoading) {
            //show spinner
        }
        else {
            //hide spinner
        }
    }

    setOnValueChangeListener(listenerFunc) {
        this.#onValueChangeListener = listenerFunc;
    }

    #onValueChangeNotify(value) {
        if(this.#onValueChangeListener != null) {
            this.#onValueChangeListener(value);
        }
    }

    #onInputHandler = (event) => {
        
        clearTimeout(this.#searchTimeout);
        let value = event.target.value.trim();
        
        if (value === "" ) {
            value = null;
        }

        this.#searchTimeout = setTimeout(() => {
            
            if(#previusValue != value){
                this.#onValueChangeNotify(value);
                this.#previusValue = value;
            }
            
        }, this.#debounceDelay);
    }
}