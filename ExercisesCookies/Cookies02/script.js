let bodyTable = document.querySelector("#bodyTable");
let button = document.querySelector("#button");
let photo = document.querySelector("#photo");
let divPhoto = document.querySelector("#photoPreview");
let data = [];

data.push(getDataCookies());
showData(data);

if (localStorage.getItem("previewImage")) {
    let img = document.createElement("img");
    img.src = localStorage.getItem("previewImage");
    divPhoto.append(img);
}

/*********************************************************************************************************/

button.addEventListener("click", (event) => {
    event.preventDefault();
    let inputs = document.querySelectorAll("input");
    let isValid = "";

    let formData =
        {
            "Firstname": !validator.isEmpty(inputs[0].value) ? inputs[0].value : isValid += "Firstname is invalid - ",
            "LastName": !validator.isEmpty(inputs[1].value) ? inputs[1].value : isValid += "LastName is invalid - ",
            "Birthday": validator.isDate(inputs[2].value) ? inputs[2].value : isValid += "Birthday is invalid - ",
            "Gender": !validator.isEmpty(inputs[3].value) ? inputs[3].value : isValid += "Gender is invalid - ",
            "Email": validator.isEmail(inputs[4].value) ? inputs[4].value : isValid += "Email is invalid - ",
            "PhoneNumber": validator.isNumeric(inputs[5].value) ? inputs[5].value : isValid += "PhoneNumber is invalid",
        };

    if (isValid === "") {
        bodyTable.innerHTML = "";
        data.push(formData);
        showData(data);
        saveDataCookies(data);
    } else {
        alert(isValid);
    }

});

function showData(objArray) {
    objArray.forEach(objects => {
        let tr = document.createElement("tr");
        Object.values(objects).forEach(object => {
            let td = document.createElement("td");
            td.innerHTML = object;
            tr.append(td);
        });
        bodyTable.append(tr);
    });
}

function saveDataCookies(allData) {
    allData.forEach(data => {
        document.cookie = `Formulario=${JSON.stringify(data)}; expire=Thu, 12 Jun 2025 09:00:00 UTC; path=/;`;
    });
}

function getDataCookies() {

    let cookieString = document.cookie;
    let cookieItems = cookieString.split('; ');
    let cookieObject = {};

    cookieItems.forEach(item => {
        let [name, value] = item.split('=');
        if (name === "Formulario") {
            cookieObject = JSON.parse(value);
        }
    });
    return cookieObject;
}

/*********************************************************************/

photo.addEventListener("change", () => {
    previewImage(photo);
});

function previewImage(input) {
    let file = input.files[0];
    let img = document.createElement("img");

    img.src = URL.createObjectURL(file);
    divPhoto.innerHTML = "";
    divPhoto.append(img);
    localStorage.setItem("previewImage", img.src);
}