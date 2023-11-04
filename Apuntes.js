console.log(parseInt(10.3));
console.log(parseInt(10, 16));  // hex -> de
console.log(parseInt(11, 16));  // hex -> dec
console.log(parseInt(10, 2));    // bin -> dec
console.log(parseInt(11, 8));    // bin -> dec
console.log(parseInt(0x10));          // hex -> dec
console.log(parseInt(0o11, 8)); // bin -> dec

let today = new Date();

console.log(today.getUTCMonth().toString());

//
function sum1(a, b) {
    return a + b;
}

sum1(2, 3);

// Expression function
let sum2 = function (a, b) {
    return a + b;
};
sum2(2, 3);

// Arrow function
let sum3 = (a, b) => {
    return a + b;
};
sum3(2, 3);

//
(function (a, b) {
    return a + b;
})(2, 3);

let grades = [1, 5, 3, 10];
console.log("Array normal:       ", grades);
console.log("Array .map:         ", grades.map(g => g * 2));
console.log("Array .filter:      ", grades.filter(g => g > 5));
console.log("Array .find:        ", grades.find(g => g > 3));
console.log("Array .findIndex:   ", grades.findIndex(g => g > 3));
console.log("Array .indexOf:     ", grades.indexOf(5));
console.log("Array .reduce       ", grades.reduce((max, n) => n > max ? n : max, Number.MIN_VALUE));

for (let index = 0; index < 0; index++) {
}  // for i

for (let grade of grades) {
}                // for of

for (let gradesKey in grades) {
}            // for in

let grades1 = [13, 7, 5, 3, 5, 10];

grades1.shift();
console.log("\nArray .shift:   ", grades1);

grades1.unshift(55, 66, 77);
console.log("Array .unshift: " + grades1);

grades1.push(44, 44);
console.log("Array .push:    " + grades1);

grades1.pop();
console.log("Array .pop:     " + grades1);

let str1 = "Hola Nuria";

let str2 = str1.split('').map(c => c.toUpperCase()).join('');
console.log(str2);