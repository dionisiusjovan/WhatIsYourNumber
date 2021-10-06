class AppHeader extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host {
            display: block;
            width: 100%;
            padding-bottom: 30px;
            position: sticky;
            color: white;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }
        .bg-color {
            background-color: #3F72AF;
        }
        .sticky {
            position: fixed;
            top: 0;
            width: 100%;
        }
        .color-white{
            color: white;
        }
        </style>
        <div class="px-4 pt-5 pb-1 mt-50 mb-1 text-center sticky bg-color" id="header-element">
            <h1 class="display-5 fw-bold color-white">What Is Your Number?</h1>
            <div class="col-lg-6 mx-auto color-white">
                <p class="lead mb-4">A trivia of your favorite number!</p>
            </div>
        </div>
        `
        const searchBarElement = document.createElement('search-bar');
        this.childNodes[3].appendChild(searchBarElement)
    }
}
customElements.define('app-header', AppHeader);