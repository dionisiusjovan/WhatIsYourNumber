class NumItem extends HTMLElement {
    set number(num){
        this._num = num;
        this.render();
    }

    render(){
        let localeNum;
        if(/^\d+$/.test(this._num.number)){
            localeNum = this._num.number.toLocaleString();
        } else {
            localeNum = this._num.number;
        }

        this.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                margin-bottom: 18px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                overflow: hidden;
            }
            .container {
                padding: 24px;
                border-radius: 10px;
                display: block;
                margin-bottom: 18px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                overflow: hidden;
                background-color: white;
            }
            .num-heading {
                display: flex;
                align-items: center;
            }
            h1 {
                word-wrap: break-word;
                line-height:100%;
                overflow:hidden;
                color: #112D4E;
            }
            .num-info > p {
                text-size: 20pt;
            }
        </style>
        <div class="container">
            <div class="row">
                <div class="col-sm num-heading justify-content-center">
                    <h1>${localeNum}</h1>
                </div>
                <div class="col-lg num-info">
                    <small>${this._num.type}</small>
                    <p>${this._num.text}</p>
                </div>
            </div>
        </div>`;
    }
}
customElements.define("num-item", NumItem);