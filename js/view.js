class View {

    #rootView;

    constructor(rootView) {
        this.#rootView = rootView;
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
            const li = document.createElement('li');
            li.className = 'site-card';

            if (site.nombre && site.url) {
                const a = document.createElement('a');
                a.href = site.url;
                a.target = '_blank';
                a.rel = 'noopener noreferrer';
                a.className = 'site-name';
                a.textContent = site.nombre;
                li.appendChild(a);
            }

            if (site.descripcion) {
                const p = document.createElement('p');
                p.className = 'site-description';
                p.textContent = site.descripcion;
                li.appendChild(p);
            }

            sitesList.appendChild(li);
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
