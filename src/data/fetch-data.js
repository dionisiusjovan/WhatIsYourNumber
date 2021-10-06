const baseURL = `http://numbersapi.com`

const checkDigits = numStr => !/^\d+\.\d+$|^\d+$/.test(numStr);

class FetchAPI {
    static getRandomData() {
        return fetch(`${baseURL}/random/?json`)
        .then( resp => resp.json() )
        .then( respJSON => {
            if (respJSON.found) {
                return Promise.resolve(respJSON);
            } else {
                return Promise.reject(`Couldn't get data from API`);
            }
        })
    }

    static getDataByNum(num) {
        if (checkDigits(num)) return Promise.reject(`Invalid input!`)
        return fetch(`${baseURL}/${num}?json`)
        .then( resp => resp.json() )
        .then( respJSON => {
            if (respJSON.found) {
                return Promise.resolve(respJSON);
            } else {
                return Promise.reject(`Couldn't get data from API`);
            }
        })
    }
}

export default FetchAPI;