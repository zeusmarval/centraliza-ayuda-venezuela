class ResultItemViewBuilder {

    #rootView;

    constructor(config) {
        this.#rootView = config.rootView;
    }

    buildItemView(item) {
        const li = this.#rootView.createElement('li');
        li.className = 'site-card';

        if (!item || typeof item !== 'object' || Array.isArray(item)) {
            return li;
        }

        if (item.nombre && item.url) {
            const a = this.#rootView.createElement('a');
            a.href = item.url;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.className = 'site-name';
            a.textContent = item.nombre;
            li.appendChild(a);
        }

        const hasDescripcion = !!item.descripcion;

        if (hasDescripcion) {
            const p = this.#rootView.createElement('p');
            p.className = 'site-description';
            p.textContent = item.descripcion;
            li.appendChild(p);
        }

        // --- Tags section ---
        const validTags = this.#getValidTags(item.tags);

        if (validTags.length > 0) {
            if (hasDescripcion) {
                const hr = this.#rootView.createElement('hr');
                hr.className = 'site-card__separator';
                li.appendChild(hr);
            }

            const tagsContainer = this.#rootView.createElement('div');
            tagsContainer.className = 'site-card__tags';
            tagsContainer.setAttribute('role', 'list');
            tagsContainer.setAttribute('aria-label', 'Tags');

            for (const tag of validTags) {
                const span = this.#rootView.createElement('span');
                span.className = 'site-card__tag';
                span.setAttribute('role', 'listitem');
                span.textContent = tag;
                if (tag.length > 25) {
                    span.setAttribute('title', tag);
                }
                tagsContainer.appendChild(span);
            }

            li.appendChild(tagsContainer);
        }

        return li;
    }

    #getValidTags(tags) {
        if (!Array.isArray(tags)) {
            return [];
        }
        return tags.filter(t => typeof t === 'string' && t.trim().length > 0);
    }
}
