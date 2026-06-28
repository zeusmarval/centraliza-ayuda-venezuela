class TagSelectedZone {

    #onRemoveTagListener;
    #selectedTags;
    #containerElement;
    #tagItemViewBuilder;

    constructor(config) {
        if (!config.containerElement) throw new Error('TagSelectedZone: containerElement es requerido');
        if (!config.tagItemViewBuilder) throw new Error('TagSelectedZone: tagItemViewBuilder es requerido');

        this.#containerElement = config.containerElement;
        this.#tagItemViewBuilder = config.tagItemViewBuilder;
        this.#selectedTags = [];

        // Event delegation: un solo listener para clicks y teclado
        this.#containerElement.addEventListener('click', (e) => this.#handleTagClick(e));
        this.#containerElement.addEventListener('keydown', (e) => this.#handleTagKeydown(e));

        // Ocultar inicialmente
        this.#updateVisibility();
    }

    setSelectedTags(tags) {
        const items = Array.isArray(tags) ? tags : [];
        this.#selectedTags = [...items];
        this.#render();
    }

    setOnRemoveTagListener(listenerFunc) {
        this.#onRemoveTagListener = listenerFunc;
    }

    #handleTagClick(event) {
        const button = event.target.closest('.sidebar-tag-btn');
        if (!button) return;
        const tag = button.dataset.tag;
        this.#removeTag(tag);
    }

    #handleTagKeydown(event) {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        const button = event.target.closest('.sidebar-tag-btn');
        if (!button) return;
        event.preventDefault();
        const tag = button.dataset.tag;
        this.#removeTag(tag);
    }

    #render() {
        this.#containerElement.innerHTML = '';
        for (const tag of this.#selectedTags) {
            const button = this.#tagItemViewBuilder.buildItemView(tag);
            // Forzar estado activo
            button.classList.add('sidebar-tag-btn--active');
            button.setAttribute('aria-checked', 'true');
            this.#containerElement.appendChild(button);
        }
        this.#updateVisibility();
    }

    #removeTag(tag) {
        this.#selectedTags = this.#selectedTags.filter(t => t !== tag);
        this.#render();
        if (this.#onRemoveTagListener != null) {
            this.#onRemoveTagListener([...this.#selectedTags]);
        }
    }

    #updateVisibility() {
        if (this.#selectedTags.length === 0) {
            this.#containerElement.style.display = 'none';
        } else {
            this.#containerElement.style.display = 'grid';
        }
    }
}
