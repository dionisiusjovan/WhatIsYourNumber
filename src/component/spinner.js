class loadingSpinner extends HTMLElement {

    set isActive(stats){
        this._stats = stats;
        this.render();
    }

    render(){
        if(this._stats) {
            this.innerHTML = `
            <style>
                .spinner-border{
                    margin-top:30px;
                }
            </style>
            <div class="text-center">
                <div class="spinner-border" role="status">
                    <span class="sr-only"></span>
                </div>
            </div>`;
        } else {
            this.innerHTML = `
            <div class="text-center"></div>`;
        }
    }
}

customElements.define('loading-spinner', loadingSpinner);