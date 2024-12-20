class ListSongs extends HTMLElement {
    static get observedAttributes() {
        return ['format'];
    }

    connectedCallback() {
        this.innerHTML = `
            <ul class="songs">
                ${this.generateSongsHTML()}
            </ul>
        `;
        this.attachListeners();
    }

    generateSongsHTML() {
        const songs = [
            {
                title: 'Scroll-Animation',
                artist: 'Code Explanation',
                cover: 'assets/code.jpg'
            },
            {
                title: 'After Dark',
                artist: 'Mr.Kitty',
                cover: 'assets/after-dark.jpg'
            },
            {
                title: 'Falling Down',
                artist: 'XXXTENTACION, Lil Peep',
                cover: 'assets/falling-down.jpg'
            },
            {
                title: 'Wonderland',
                artist: 'Beudi, Suckerpunk',
                cover: 'assets/wonderland.jpg'
            },
            {
                title: 'Change',
                artist: 'Deadfish',
                cover: 'assets/change.jpg'
            },
            {
                title: 'Paparazzi',
                artist: 'Kim Dracula',
                cover: 'assets/paparazzi.jpg'
            },
            {
                title: 'Life I Chose',
                artist: 'Bazanji',
                cover: 'assets/life-i-chose.jpg'
            },
            {
                title: "She's Crazy but She's Mine",
                artist: 'Alex Sparrow',
                cover: 'assets/shes-crazy-but-shes-mine.jpg'
            },
            {
                title: 'In the End',
                artist: 'Fleurie, Tommee Profitt, Jung Youth',
                cover: 'assets/in-the-end.jpg'
            },
            {
                title: 'Save Me',
                artist: 'Omri',
                cover: 'assets/save-me.jpg'
            },
            {
                title: 'Let Me Through',
                artist: 'CG5',
                cover: 'assets/let-me-through.jpg'
            }
        ];

        return songs
            .map((song, index) => {
                if (index === 0) {
                    return `
                        <li class="song" data-title="${song.title}" data-artist="${song.artist}" data-cover="${song.cover}">
                            <a href="inspect-song/inspect-song.html">
                                <img src="${song.cover}" alt="${song.title} - ${song.artist}">
                            </a>
                        </li>
                    `;
                }
                return `
                    <li class="song" data-title="${song.title}" data-artist="${song.artist}" data-cover="${song.cover}">
                        <a>
                            <img src="${song.cover}" alt="${song.title} - ${song.artist}">
                        </a>
                    </li>
                `;
            })
            .join('');
    }

    attachListeners() {
        const songsList = this.querySelector('.songs');
        songsList.addEventListener('click', (event) => {
            const link = event.target.closest('a');
            if (!link) return;

            event.preventDefault();

            const parent = link.closest('.song');
            const { title, artist, cover } = parent.dataset;

            const url = new URL(link.href, window.location.origin);
            url.searchParams.set('title', title);
            url.searchParams.set('artist', artist);
            url.searchParams.set('cover', cover);

            window.location.href = url.toString();
        });
    }
}

customElements.define('list-songs', ListSongs);