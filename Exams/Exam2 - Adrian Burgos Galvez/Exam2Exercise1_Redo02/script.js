async function getRemoteData(url) {
    let response = await fetch(url);
    if (response.ok && response.status === 200) {
        return response.json();
    } else {
        throw new Error("error...");
    }
}

/**************************************************************************/

let url = 'allCountries.json';
let allCountries = await getRemoteData(url);

let tdEnglish = document.querySelector('#tdEnglish');
/*
let tdSpanish = document.querySelector('#tdSpanish');
*/
let tdGerman = document.querySelector('#tdGerman');
let tbody = document.querySelector('#tbody');

let inputEnglish = document.querySelector('#inputEnglish');
let inputSpanish = document.querySelector('#inputSpanish');
let inputGerman = document.querySelector('#inputGerman');

showData(allCountries);

/********************************************************************************/

function showData(allData) {
    let countries = allData.countries;
    console.log(countries);

    countries.forEach(country => {
        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${country.name_en}</td>
            <td></td>
            <td></td>
        `
        tbody.append(row);
    });
}

/****************************************************************************/
let previousRow = null;
tbody.addEventListener("click", (event) => {
    let currentRow = event.target.parentNode;

    if (previousRow !== null) {
        previousRow.style.backgroundColor = '';
    }
    currentRow.style.backgroundColor = 'lightyellow';
    previousRow = currentRow;

    getEnglishCountry(event.target.parentNode);
});
/****************************************************************************/

function getEnglishCountry(currentRow) {
    inputEnglish.placeholder = currentRow.firstElementChild.textContent;
}

inputSpanish.addEventListener("keyup", (event) => {
    let tdSpanish = previousRow.querySelectorAll("td")[1];
    tdSpanish.innerText = inputSpanish.value;
});

inputGerman.addEventListener("keyup", (event) => {
    let tdGerman = previousRow.querySelectorAll("td")[2];
    tdGerman.innerText += inputGerman.value;
});