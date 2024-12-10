class ListImg extends HTMLElement {
    static get observedAttributes() {
        return ['format'];
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="list-img">
                <a href="test.html" onclick="handleClick(event)"><img src="https://picsum.photos/id/1/300/300"></a>
            </div>
        `;
        const style = document.createElement('style');
        style.textContent = `
        
        `;
    }

    disconnectedCallback() {
        
    }

    attributeChangedCallback(name, oldValue, newValue) {
        
    }
}

customElements.define('list-img', ListImg);