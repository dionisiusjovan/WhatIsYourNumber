import FetchAPI from "../data/fetch-data.js";
import $ from 'jquery';
import swal from 'sweetalert';
import "../component/search-bar.js";
import "../component/num-list.js";
import "../component/spinner.js"

const main = () => {
    const searchBarElement = document.querySelector("search-bar");
    const numListElement = document.querySelector("num-list");
    const loadingspinner = document.querySelector("loading-spinner");
    let resArr = new Set();
    let searchArr = new Set();

    const fallbackResult = msg => { swal({
            title: msg,
            text: " ",
            icon: "warning",
            buttons: false,
            dangerMode: true,
            timer:1500
        })
    };

    const randomNumber = () => {
        loadingspinner.isActive = true;
        let fetches = [];

        for (let index = 0; index < 10; index++) {
            fetches.push(
                FetchAPI.getRandomData()
                    .then( res => {
                        resArr.add(JSON.stringify(res))
                    })
            );
        }
        Promise.all(fetches).then( () => {
            numListElement.numbers = resArr
            loadingspinner.isActive = false
        }).catch(fallbackResult);
    }

    const searchNumber = val => {
        loadingspinner.isActive = true;
        let fetches = [];
        
        for (let index = 0; index < 10; index++) {
            fetches.push(
                FetchAPI.getDataByNum(val)
                .then( res => {
                    searchArr.add(JSON.stringify(res))
                })
            );
        }
        Promise.all(fetches).then( () => {
            numListElement.numbers = searchArr
            loadingspinner.isActive = false
        }).catch(fallbackResult);
    }

    const onButtonSearchClicked = () => {
        searchArr.clear();
        if (searchBarElement.value) {
            searchNumber(searchBarElement.value);            
        } else {
            randomNumber();
        }
    }

    searchBarElement.clickEvent = onButtonSearchClicked;
    
    $(window).scroll(function () {
        // End of the document reached?
        if ($(document).height() - $(this).height() == $(this).scrollTop()) {
            if (!searchBarElement.value) randomNumber();
        }
    }); 

    randomNumber();
}

export default main;