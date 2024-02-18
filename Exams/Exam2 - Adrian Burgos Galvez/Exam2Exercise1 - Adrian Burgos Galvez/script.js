async function getRemoteData(url) {
    let response = await fetch(url);
    if (response.ok && response.status === 200) {
        return response.json();
    } else {
        throw new Error("error...");
    }
}

let url = 'allCountries.json';
let content = document.querySelector("#content");

getRemoteData(url)
    .then(data => {
        showData(data);
    })
    .catch(error => {
        content.innerHTML = "something went wrong";
        console.log(error);
    });

function showData(countries) {

    let dataCounties = countries.countries;

    dataCounties.forEach(data => {
        let row = document.createElement("tr");
        row.innerHTML = `<td class="row1">${data.name_en}</td>
                           <td class="row2"></td>
                           <td class="row3"></td>`
        content.append(row);
    });
}

let inputEnglish = document.querySelector("#english");
let inputSpanish = document.querySelector("#spanish");
let inputGerman = document.querySelector("#german");

/*****************************************************************************/
let previousRow = null;
content.addEventListener("click" , event => {

    let cell = event.target;
    let rowIndex = cell.parentElement.rowIndex;

    let rows = document.querySelectorAll("tr");

    if (previousRow !== null) {
        rows[previousRow].style.background = "";
    }

    rows[rowIndex].style.background = "#ffeeba";

    let valueTd1 = rows[rowIndex].querySelector(".row1");
    console.log(valueTd1);

    previousRow = rowIndex;
});

/* Input */

/* 1 */
let allInputs = document.querySelectorAll("input");
allInputs.forEach(input => {
    input.addEventListener("keydown", function (ev) {
        console.log(ev);
        if (!isNaN(ev.key)) {
            ev.preventDefault();
        }
    });
})