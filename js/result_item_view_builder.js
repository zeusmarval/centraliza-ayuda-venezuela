class ResultItemViewBuilder {

    #selectedTags;
    #rootView;

    constructor(config) {
        this.#rootView = config.rootView;
    }

    setSelectedTags(tags) {
        this.#selectedTags = Array.isArray(tags) ? [...tags] : [];
    }


    buildItemView(item, selectedTags) {
        const li = this.#rootView.createElement('li');
        li.className = 'site-card';

        if (!item || typeof item !== 'object' || Array.isArray(item)) {
            return li;
        }

        // Determine which selectedTags to use: parameter takes precedence, then internal state
        const effectiveTags = arguments.length >= 2
            ? (Array.isArray(selectedTags) ? selectedTags : [])
            : (Array.isArray(this.#selectedTags) ? this.#selectedTags : []);

        if (item.nombre && item.url) {
            const a = this.#rootView.createElement('a');
            a.href = item.url;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.className = 'site-name';
            a.textContent = item.nombre;
            li.appendChild(a);
        }

        if (item.descripcion) {
            const p = this.#rootView.createElement('p');
            p.className = 'site-description';
            p.textContent = item.descripcion;
            li.appendChild(p);
        }

        // --- Tags section ---
        const validTags = this.#getValidTags(item.tags);

        if (validTags.length > 0) {
            const tagsWrapper = this.#rootView.createElement('div');
            tagsWrapper.className = 'site-card__tags-wrapper';

            const hr = this.#rootView.createElement('hr');
            hr.className = 'site-card__separator';
            tagsWrapper.appendChild(hr);

            const tagsContainer = this.#rootView.createElement('div');
            tagsContainer.className = 'site-card__tags';
            tagsContainer.setAttribute('role', 'list');
            tagsContainer.setAttribute('aria-label', 'Tags');

            for (const tag of validTags) {
                const span = this.#rootView.createElement('span');
                span.setAttribute('role', 'button');
                span.setAttribute('tabindex', '0');
                span.dataset.tag = tag;
                span.textContent = tag;

                const isSelected = effectiveTags.some(
                    st => st.trim().toLowerCase() === tag.trim().toLowerCase()
                );

                span.className = isSelected
                    ? 'site-card__tag site-card__tag--selected'
                    : 'site-card__tag';
                span.setAttribute('aria-pressed', String(isSelected));

                if (tag.length > 25) {
                    span.setAttribute('title', tag);
                }
                tagsContainer.appendChild(span);
            }

            tagsWrapper.appendChild(tagsContainer);
            li.appendChild(tagsWrapper);
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
