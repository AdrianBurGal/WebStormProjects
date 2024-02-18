"use strict";
/*******************************************************************************/
var bodyTable = document.querySelector("#bodyTable");
var button = document.querySelector("#button");
var data = [];
var peopleDictionary = {};
/*******************************************************************************/
function showData(objArray) {
    Object.values(objArray).forEach(function (person) {
        var tr = document.createElement("tr");
        Object.values(person).forEach(function (value) {
            var td = document.createElement("td");
            if (typeof value === "string" || typeof value === "boolean") {
                td.innerHTML = value.toString();
            }
            tr.append(td);
        });
        bodyTable.append(tr);
    });
}
/*******************************************************************************/
button.addEventListener("click", function (event) {
    event.preventDefault();
    var inputs = document.querySelectorAll("input");
    var isValid = "";
    var formData = {
        firstname: inputs[0].value,
        lastName: inputs[1].value,
        birthday: inputs[2].value,
        gender: inputs[3].value,
        email: inputs[4].value,
        phoneNumber: inputs[5].value,
        isActive: true,
    };
    bodyTable.innerHTML = "";
    data.push(formData);
    var personId = crypto.randomUUID();
    peopleDictionary[personId] = formData;
    showData(peopleDictionary);
});
