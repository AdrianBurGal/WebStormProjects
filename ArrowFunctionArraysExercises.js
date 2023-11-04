/*1. In an array there are names of people. Create an arrow function that generates a
greeting for each of them.*/

let names = ["Pablo", "Roberto", "Migue", "Emiliano", "Charlie", "Adrián"];
let greetings = "";

let greeting = names => {
    for (let index = 0; index < names.length; index++) {
        greetings += `Hello ${names[index]}! `;
    }
    return greetings;
}
console.log("Exercise1.1: " + greeting(names));

/***************************************************************************************/

/*2. Based on an array of numbers, create another array whose elements are the square of
each of the elements of the first array.
a) Use a traditional function definition and array manipulation technique.
b) Refactor the previous code, to use an arrow function and the array mapping function.*/

let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function square(numbers) {
    let squareNumbers = [];
    for (let index = 0; index < numbers.length; index++) {
        squareNumbers[index] = Math.pow(numbers[index], 2);
    }
    return squareNumbers;
}
console.log("Exercise2.1: " + square(numbers1));

console.log("Exercise2.2: " + numbers1.map(n => n * n));

/***************************************************************************************/

/*3. Based on an array of numbers, create another array whose elements are the positive
numbers of the first one.
    a) Use a traditional function definition and array manipulation technique.
    b) Refactor the previous code, to use an arrow function and the array mapping function.*/

let numbers2 = [-1, 2, -3, -4, 5, -6, 7, -8, 9, -10];

let positive = numbers2 => {
    let positiveNumbers = [];
    for (let index = 0; index < numbers2.length; index++) {
        if (numbers2[index] > 0) {
            positiveNumbers[index] = numbers2[index];
        }
    }
    return positiveNumbers;
}

console.log("Exercise3.1: " + positive(numbers2));

console.log("Exercise3.2: " + numbers2.filter(n => n > 0));

/***************************************************************************************/

/*4. Based on an array of numbers, use an arrow function to calculate its average.*/

let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let average = numbers3 => {
    let averageNumbers = 0;
    for (let index = 0; index < numbers3.length; index++) {
        averageNumbers += numbers3[index];
    }
    return averageNumbers / numbers3.length;
}
console.log("Exercise4.1: " + average(numbers3));

/***************************************************************************************/

/*5. Based on an array of numbers, use an arrow function to calculate the greatest number*/

let numbers4 = [9, -5, 2, 7, -3, -10, 3, 1, -8, 4];

let greatest = numbers4 => {
    let max = Number.MIN_VALUE;
    for (let index = 0; index < numbers4.length; index++) {
        if (max < numbers4[index]) {
            max = numbers4[index];
        }
    }
    return max;
}
console.log("Exercise5.1: " + greatest(numbers4));

console.log("Exercise5.2: " + numbers4.reduce((max, n) => n > max ? n : max, Number.MIN_VALUE));
