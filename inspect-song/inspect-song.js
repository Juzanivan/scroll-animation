class InspectSong extends HTMLElement {
    static get observedAttributes() {
        return ['format'];
    }

    async connectedCallback() {
        const params = new URLSearchParams(window.location.search);
        const title = params.get('title');
        const artist = params.get('artist');
        const cover = params.get('cover');
        const songKey = title?.toLowerCase().replace(/\s/g, '-');

                document.body.innerHTML = `
                    <main id="detail">
                        <div class="song-description">
                            <img src="../${cover}" alt="${title}" view-transition-name="song-avatar-${songKey}">
                            <h1 view-transition-name="song-title">${title}</h1>
                            <h2>${artist}</h2>
                        </div>
                        <div class="song-lyrics">
                            <style>
                            html, body {
                                height: 100%;
                                width: 100%;
                                margin: 0;
                                padding: 0;
                                background-color: #111;
                                font-family: 'Arial', sans-serif;
                                color: #f0f0f0;
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                align-items: center;
                                overscroll-behavior: contain;
                                box-sizing: border-box;
                            }

                            #detail {
                                width: 100%;
                                height: 100%;
                                display: flex;
                                flex-direction: column;
                                gap: 2em;
                                padding: 2em;
                            }

                            .song-description {
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                text-align: center;
                                gap: 1em;
                            }

                            .song-description img {
                                width: 350px;
                                height: 350px;
                                border-radius: 10px;
                                box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
                                transition: transform 0.3s ease;
                            }

                            .song-description img:hover {
                                transform: scale(1.05);
                            }

                            .song-description h1 {
                                font-size: 2.5rem;
                                color: #fff;
                                font-weight: bold;
                            }

                            .song-description h2 {
                                font-size: 1.5rem;
                                color: #ccc;
                            }

                            .song-lyrics {
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                gap: 1em;
                            }

                            .song-lyrics p {
                                font-size: 1.2rem;
                                line-height: 1.6;
                                color: #ddd;
                                max-width: 800px;
                                text-align: justify;
                            }

                            .songs {
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                overflow-x: auto;
                                padding-top: 2em;
                                gap: 20px;
                                max-width: 90vw;
                                background: rgba(0, 0, 0, 0.7);
                                padding: 30px 0;
                                border-radius: 10px;
                                box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
                            }

                            .songs li {
                                scroll-snap-align: center;
                                perspective: 40em;
                                display: inline-block;
                                width: var(--cover-size);
                                height: var(--cover-size);
                                aspect-ratio: 1;
                                transition: transform 0.3s ease;
                                animation: adjust-z-index 1s linear both;
                            }

                            .songs li:hover {
                                transform: translateY(-10px);
                            }

                            .songs li > a {
                                display: block;
                                width: 100%;
                                height: 100%;
                                aspect-ratio: 1;
                                perspective: 40em;
                                transition: transform 0.3s ease;
                            }

                            .songs li > a:hover {
                                transform: translateY(-10px);
                            }

                            .songs li > a > img {
                                width: 100%;
                                height: 100%;
                                display: block;
                                border-radius: 10px;
                                box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
                                transition: transform 0.3s ease, box-shadow 0.3s ease;
                            }

                            .songs li > a > img:hover {
                                transform: scale(1.1);
                                box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
                            }

                            @keyframes adjust-z-index {
                                0% { z-index: 1; }
                                50% { z-index: 100; }
                                100% { z-index: 1; }
                            }

                            :root {
                                --cover-size: 15rem;
                            }

                            @media (max-width: 1024px) {
                                :root {
                                    --cover-size: 9rem;
                                }
                            }

                            @media (max-width: 600px) {
                                :root {
                                    --cover-size: 6rem;
                                }
                            }

                            .songs::-webkit-scrollbar {
                                width: 12px;
                            }

                            .songs::-webkit-scrollbar-thumb {
                                background-color: #555;
                                border-radius: 10px;
                            }

                            .songs::-webkit-scrollbar-track {
                                background: none;
                            }

                            @layer view-transitions {
                                @view-transition {
                                    navigation: auto;
                                }

                                #detail main img {
                                    view-transition-name: profile-avatar;
                                }

                                #detail h1 {
                                    view-transition-name: profile-name;
                                }
                            }
                            </style>
                            <div>
                            <header>
                                <h1>Animations liées au défilement en CSS</h1>
                            </header>
                            <main>
                                <section>
                                <p>
                                    Les animations liées au défilement, ou <em>scroll-driven
                                    animations</em>, sont une fonctionnalité CSS qui permet de
                                    synchroniser des animations avec le défilement d'une page ou d'un
                                    conteneur. Cette approche native offre une alternative performante
                                    aux solutions JavaScript traditionnelles pour créer des effets
                                    interactifs lors du scroll.
                                </p>
                                </section>
                                <section>
                                <h2>Principes de base :</h2>
                                <p>
                                    Pour mettre en place une animation liée au défilement, il est
                                    nécessaire de définir une animation CSS classique à l'aide de
                                    <code>@keyframes</code> et de la propriété <code>animation</code>.
                                    Les propriétés supplémentaires <code>animation-timeline</code> et
                                    <code>animation-range</code> permettent de lier cette animation au
                                    défilement :
                                </p>
                                <pre>
                                    <code>
                        @keyframes monAnimation {
                        /* Définition des étapes de l'animation */
                        }

                        .element {
                        animation: monAnimation linear auto both; /* Configuration de l'animation */
                        animation-timeline: scroll(); /* Association au défilement */
                        animation-range: 0 100%; /* Plage de défilement pour l'animation */
                        }
                                    </code>
                                </pre>
                                </section>
                                <section>
                                <h2>Mon Animation de Défilement :</h2>
                                <p>
                                    Voici une démonstration d'une animation personnalisée basée sur le
                                    défilement. Elle utilise la fonctionnalité CSS de <code>view-timeline</code> pour gérer le changement de l'élément lorsque celui-ci entre ou sort de la vue, combiné avec des animations pour ajuster les éléments à mesure que l'utilisateur fait défiler.
                                </p>
                                <pre>
                                    <code>
                        .songs {
                            display: flex;
                            flex-wrap: nowrap;
                            align-items: center;
                            overflow-x: scroll;
                            scroll-snap-type: x mandatory;
                            background: rgba(0, 0, 0, 0.5);
                            padding-top: 100px;
                        }

                        .songs li {
                            scroll-snap-align: center;
                            animation: adjust-z-index linear both;
                            animation-timeline: --li-in-and-out-of-view;
                            perspective: 40em;
                        }
                                    </code>
                                </pre>
                                <p>
                                    L'animation gère le défilement horizontal d'une liste d'éléments et leur
                                    ajustement dynamique pour un effet visuel fluide. Il est également
                                    possible d'inclure des images, des transitions de perspective, et plus encore.
                                </p>
                                </section>
                                <section>
                                <h2>Types d'animations liées au défilement :</h2>
                                <article>
                                    <h3>1. Animation basée sur le défilement (<em>Scroll Timeline</em>) :</h3>
                                    <p>
                                    L'animation progresse en fonction de la position de défilement
                                    d'un conteneur spécifique ou de la page entière. La fonction
                                    <code>scroll()</code> permet de définir cette association, avec
                                    des paramètres optionnels pour spécifier le conteneur de
                                    défilement et l'axe concerné.
                                    </p>
                                    <pre>
                                    <code>
                        .element {
                        animation-timeline: scroll(root block); /* Défilement de la page sur l'axe vertical */
                        }
                                    </code>
                                    </pre>
                                </article>
                                <article>
                                    <h3>2. Animation basée sur la vue (<em>View Timeline</em>) :</h3>
                                    <p>
                                    L'animation se déclenche lorsque l'élément entre ou sort de la
                                    zone visible du conteneur de défilement. La fonction
                                    <code>view()</code> est utilisée pour cette configuration, avec
                                    un paramètre optionnel pour l'axe de défilement.
                                    </p>
                                    <pre>
                                    <code>
                        .element {
                        animation-timeline: view(block); /* Vue sur l'axe vertical */
                        }
                                    </code>
                                    </pre>
                                </article>
                                </section>
                                <section>
                                <h2>Applications courantes :</h2>
                                <ul>
                                    <li>
                                    <strong>Indicateurs de progression de lecture :</strong> Une barre
                                    en haut de la page qui se remplit au fur et à mesure que
                                    l'utilisateur fait défiler le contenu, indiquant sa progression
                                    dans la page.
                                    </li>
                                    <li>
                                    <strong>Parallax et effets de profondeur :</strong> Les éléments
                                    peuvent se déplacer à différentes vitesses pour créer un effet
                                    de profondeur, souvent utilisé dans les designs modernes.
                                    </li>
                                    <li>
                                    <strong>Animations d'éléments en vue :</strong> Les éléments se
                                    déplacent, changent ou apparaissent uniquement lorsqu'ils sont
                                    visibles dans la fenêtre de défilement.
                                    </li>
                                </ul>
                                </section>
                            </main>
                            </div>

                            <list-songs></list-songs>

                            <script src="script.js"></script>
                            <script src="list-songs/list-songs.js"></script>
                        </div>
                    </main>
                `;

        const style = document.createElement('style');
        style.textContent = `
            main {
                font-family: Arial, sans-serif;
                padding: 20px;
                line-height: 1.5;
            }
            .song-description img {
                max-width: 100%;
                border-radius: 10px;
            }
            .song-lyrics {
                margin-top: 20px;
            }
        `;
        document.head.appendChild(style);
    }

    disconnectedCallback() {
        
    }

    attributeChangedCallback(name, oldValue, newValue) {
        
    }
}

customElements.define('inspect-song', InspectSong);