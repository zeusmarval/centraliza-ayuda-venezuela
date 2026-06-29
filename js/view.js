class View {

    #rootView;
    #resultItemViewBuilder;
    #onTagItemClickListener;
    

    constructor(rootView, config) {
        this.#rootView = rootView;
        this.#resultItemViewBuilder = config && config.resultItemViewBuilder
            ? config.resultItemViewBuilder
            : null;

        const sitesList = this.#rootView.querySelector('#sites-list');
        if (sitesList) {
            sitesList.addEventListener('click', (e) => this.#handleTagInteraction(e));
            sitesList.addEventListener('keydown', (e) => this.#handleTagKeydown(e));
        }
    }

    cleanView() {
        const sitesList = this.#rootView.querySelector('#sites-list');
        if (sitesList) {
            sitesList.innerHTML = '';
        }
    }

    showResult(data) {
        if (!Array.isArray(data) || data.length === 0) {
            return;
        }

        const sitesList = this.#rootView.querySelector('#sites-list');
        if (!sitesList) {
            return;
        }

        for (const site of data) {
            const li = this.#resultItemViewBuilder.buildItemView(site);
            sitesList.appendChild(li);
        }
    }

    setSelectedTags(tags) {
        const safeTags = Array.isArray(tags) ? [...tags] : [];
        this.#resultItemViewBuilder.setSelectedTags(safeTags);
    }

    setOnTagItemClickListener(listenerFunc) {
        this.#onTagItemClickListener = listenerFunc;
    }

    #handleTagInteraction(event) {
        const tagEl = event.target.closest('.site-card__tag');
        if (!tagEl) return;
        const tagName = tagEl.dataset.tag;
        const isCurrentlySelected = tagEl.classList.contains('site-card__tag--selected');
        if (this.#onTagItemClickListener) {
            this.#onTagItemClickListener(tagName, !isCurrentlySelected);
        }
    }

    #handleTagKeydown(event) {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        const tagEl = event.target.closest('.site-card__tag');
        if (!tagEl) return;
        event.preventDefault();
        const tagName = tagEl.dataset.tag;
        const isCurrentlySelected = tagEl.classList.contains('site-card__tag--selected');
        if (this.#onTagItemClickListener) {
            this.#onTagItemClickListener(tagName, !isCurrentlySelected);
        }
    }

    showNoResults() {
        const sitesList = this.#rootView.querySelector('#sites-list');
        sitesList.innerHTML = '';
        const li = document.createElement('li');
        li.className = 'no-results-message';
        li.textContent = 'No se encontraron coincidencias para su búsqueda.';
        sitesList.appendChild(li);
    }

    hideErrors() {
        const sitesList = this.#rootView.querySelector('#sites-list');
        const errors = sitesList ? sitesList.querySelectorAll('.error-message') : [];
        errors.forEach((el) => el.remove());
        
        const mainErrors = this.#rootView.querySelector('main');
        if (mainErrors) {
            mainErrors.querySelectorAll('.error-message').forEach((el) => el.remove());
        }
    }

    showError(message) {
        const sitesList = this.#rootView.querySelector('#sites-list');
        if (sitesList) {
            const li = document.createElement('li');
            li.className = 'error-message';
            li.setAttribute('role', 'alert');
            li.textContent = message;
            sitesList.appendChild(li);
        }
    }
}
