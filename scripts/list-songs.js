class ListSongs extends HTMLElement {
    static get observedAttributes() {
        return ['format'];
    }

    connectedCallback() {
        this.innerHTML = `
            <ul class="songs">
                <li class="song">
                    <img src="https://picsum.photos/id/16/300/300" alt="">   
                </li>
                <li class="song">
                    <img src="https://picsum.photos/id/24/300/300" alt="">   
                </li>
                <li class="song">
                    <img src="https://picsum.photos/id/39/300/300" alt="">   
                </li>
                <li class="song">
                    <img src="https://picsum.photos/id/49/300/300" alt="">   
                </li>
                <li class="song">
                    <img src="https://picsum.photos/id/54/300/300" alt="">   
                </li>
                <li class="song">
                    <img src="https://picsum.photos/id/62/300/300" alt="">   
                </li>
                <li class="song">
                    <img src="https://picsum.photos/id/71/300/300" alt="">   
                </li>
                <li class="song">
                    <img src="https://picsum.photos/id/84/300/300" alt="">   
                </li>
                <li class="song">
                    <img src="https://picsum.photos/id/97/300/300" alt="">   
                </li>
                <li class="song">
                    <img src="https://picsum.photos/id/10/300/300" alt="">   
                </li>
            </ul>
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

customElements.define('list-songs', ListSongs);

// class CurrentTime extends HTMLElement {
//     static get observedAttributes() {
//         return ['format'];
//     }

//     connectedCallback() {
//         this.innerHTML = `
//             <div class="currentTime">
//                 <p class="currentTime__title"></p>
//                 <time class="currentTime__time"></time>
//             </div>
//         `;
//         this.$time = this.querySelector('.currentTime__time');
//         this.$title = this.querySelector('.currentTime__title');
//         this.updateTitle();
//         this.updateTime();
//         this.timer = setInterval(() => this.updateTime(), 1000);
//     }

//     disconnectedCallback() {
//         clearInterval(this.timer);
//     }

//     attributeChangedCallback(name, oldValue, newValue) {
//         if (name === 'format') {
//             this.updateTitle();
//             this.updateTime();
//         }
//     }

//     updateTitle() {
//         if (this.$title) {
//             const format = this.getAttribute('format');
//             const title = format === 'utc' ? 'Heure UTC' : 'Heure locale';
//             this.$title.textContent = title;
//         }
//     }

//     updateTime() {
//         if (this.$time) {
//             const format = this.getAttribute('format');
//             const date = format === 'utc' ? new Date().toUTCString() : new Date().toLocaleString();
//             this.$time.textContent = date;
//         }
//     }
// }

// customElements.define('current-time', CurrentTime);