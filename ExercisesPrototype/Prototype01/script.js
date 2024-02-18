String.prototype.repeat = function (amount) {
    let String = "";

    if (amount > 0) {
        for (let i = 0; i < amount; i++) {
            String += this.toUpperCase();
        }
        return String;
    }
}
console.log("Hello".repeat(3));

/***************************************************************************/
let myNumber = 42;

Number.prototype.toString = function () {
    return "Number: " + this;
}
console.log(myNumber.toString());

/***************************************************************************/
let date = new Date();

Date.prototype.toString = function () {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    return days[this.getDay()] + " " + months[this.getMonth()] + " " + this.getFullYear();
}
console.log(date.toString());

/***************************************************************************/

async function getRemoteData(url) {
    let response = await fetch(url);
    if (response.ok && response.status === 200) {
        return response.json();
    } else {
        throw new Error("error...");
    }
}

getRemoteData("prototype.json")
    .then(data => {
        printValuesRecursive(data);
    })
    .catch(error => {
        console.log(error);
    });

function printValuesRecursive(data, prefix = '*') {
    Object.values(data).forEach(value => {
        if (typeof value === 'object') {
            printValuesRecursive(value, `-${prefix}`);
        } else {
            console.log(`${prefix}${value}*`);
        }
    });
}