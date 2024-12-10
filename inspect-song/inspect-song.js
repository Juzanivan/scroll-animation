class InspectSong extends HTMLElement {
    static get observedAttributes() {
        return ['format'];
    }

    connectedCallback() {
        const params = new URLSearchParams(window.location.search);
        const title = params.get('title');
        const artist = params.get('artist');
        const cover = params.get('cover');
        
        if (title && artist && cover) {
            document.body.innerHTML = `
                <main id="detail">
                    <img src="../${cover}" alt="${title}" view-transition-name="song-avatar-${title.replace(/\s/g, '')}">
                    <h1 view-transition-name="song-title">${title}</h1>
                    <h2>${artist}</h2>
                </main>
            `;
        } else {
            document.body.innerHTML = `<p>Aucune information trouvée.</p>`;
        }

        const style = document.createElement('style');
        style.textContent = `
        
        `;
    }

    disconnectedCallback() {
        
    }

    attributeChangedCallback(name, oldValue, newValue) {
        
    }
}

customElements.define('inspect-song', InspectSong);