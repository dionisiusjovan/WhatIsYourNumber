class SearchBar extends HTMLElement {

    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector('input#searchElement').value;
    }

    render(){
        this.innerHTML = `
        <style>
        .search-container {
            max-width: 800px;
            display: flex;
            position: sticky;
            margin: auto;
            top: 10px;
            padding-bottom: 30px;
        }
        .search-container > input {
            padding: 16px;
            margin-right: 8px;
            border-radius: 5px;
            text-align: center;
            border-color: #DBE2EF;
        }
        #searchButtonElement {
            border-color: #DBE2EF;
            text-align: center;
            color: white;
        }
        #searchButtonElement:hover {
            background-color: #112D4E;
            text-align: center;
        }
        #searchElement {
            border-color: #DBE2EF;
        }
        #searchElement:focus {
            border-color: #F9F7F7;
        }
        @media screen and (max-width: 990px){
            .search-container {
                flex-direction: column;
                position: static;
            }
        
            .search-container > input {
                width: 100%;
                text-align: center;
                margin-bottom: 12px;
            }
        
            .search-container > button {
                width: 100%;
            }
        }
        </style>
        <div id="search-container" class="search-container container-lg">
            <input placeholder="Let us know your favorite number" id="searchElement" type="search" class="col-lg">
            <button id="searchButtonElement" type="submit" class="btn btn-outline-secondary white col-1"><i class="icon bi-search"></i></button>
        </div>`

        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define('search-bar', SearchBar);