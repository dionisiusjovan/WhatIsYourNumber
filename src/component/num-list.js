import "./num-item.js";

class NumList extends HTMLElement {
    set numbers(nums){
        this._nums = nums;
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
        </style>
        `;
        this._nums.forEach(num => {
            const numItemElements = document.createElement('num-item');
            numItemElements.number = JSON.parse(num);
            this.appendChild(numItemElements);
        });
    }

    renderError(message){
        this.innerHTML = `
        <style>
            .placeholder {
                position: fixed;
                z-index: 50;
                font-weight: lighter;
                color: rgba(0,0,0,0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
        </style>`;
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define("num-list", NumList);