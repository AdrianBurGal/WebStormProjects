async function getRemoteData(url) {
    let response = await fetch(url);
    if (response.ok && response.status === 200) {
        return response.json();
    } else {
        throw new Error("error...");
    }
}

let url = 'allCompanies.json';
let container1 = document.querySelector("#container1");
let tbody = document.querySelector("#tbody");

getRemoteData(url)
    .then(remoteData => {
        let data = remoteData.COMPANIES;

        showContinents(data);
        showCountries(data);
        showNumCompanies(data);
        showCompanies(data);

        let select = document.querySelector(".continents");
        select.addEventListener("change", event => {
            let dataSelect = getSelectedData(data, select.value);
            showCountries(dataSelect);
            showNumCompanies(dataSelect);
            showCompanies(dataSelect);
        });
    })
    .catch(error => {
        console.log(error);
    });

function showContinents(allData) {

    console.log(allData);
    let select = document.createElement("select");
    select.className = "continents";

    allData.forEach(company => {
        select.innerHTML += `<option>${company.continent}</option>`
    });
    container1.append(select);
}

function showCountries(allData) {
    let tdCountries = document.querySelector(".countries");
    tdCountries.innerHTML = "";

    allData.forEach(company => {
        let nameContinent = company.continent.split(" ").join("");
        let allCountries = company.countries;

        allCountries.forEach(country => {
            let tr = document.createElement("tr");
            tr.className = nameContinent;
            tr.textContent = country.name;
            tdCountries.appendChild(tr);
        });
    });
}

function showNumCompanies(allData) {
    let tdNumCompanies = document.querySelector(".num");
    tdNumCompanies.innerHTML = "";

    allData.forEach(company => {
        let nameContinent = company.continent.split(" ").join("");
        let allCountries = company.countries;

        allCountries.forEach(country => {
            let tr = document.createElement("tr");
            tr.className = nameContinent;
            tr.textContent = country.companies.length;
            tdNumCompanies.appendChild(tr);
        });
    });
}

function showCompanies(allData) {
    let tdCompanies = document.querySelector(".companies");
    tdCompanies.innerHTML = "";

    allData.forEach(company => {
        let nameContinent = company.continent.split(" ").join("");
        let allCountries = company.countries;

        allCountries.forEach(country => {
            let allCompany = country.companies;
            let tr = document.createElement("tr");

            allCompany.forEach(company => {
                tr.className = nameContinent;
                tr.textContent += Object.keys(company) + ", ";
                tdCompanies.appendChild(tr);
            });
        });
    });
}

function getSelectedData(data, continent) {
    return data.filter(item => item.continent === continent);
}