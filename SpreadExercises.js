/*1. Refactor the following function that uses the `arguments` object into an arrow function:
function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}*/

let sum = (...arguments) => arguments.reduce((total, value) => total + value);
console.log("\nExercise1: " + sum(1, 2, 3, 4, 5));

/*2. Write a function that can take in any number of arguments (including numbers or strings), it must inform
you about the number of arguments that are passed in and returns the sum of only the numbers.*/

let sumNumbers = (...values) => `Sum of this ${values.length} numbers is `
    + values.reduce((total, values) => total + values);

console.log("\nExercise2: " + sumNumbers(1, 2, 3, 4, 5));

/*3. Write a function that takes any number of arguments and returns the sum of the odd
arguments.*/

let sumOddNumbers = (...values) => values.reduce((total, values) => values % 2 !== 0 ? total + values : total);
console.log("\nExercise3: " + sumOddNumbers(1, 2, 3, 4, 5));

/*4. Write a function that takes in two arrays as arguments, and returns a single array that
combines both.*/

let combinesArrays = (array1, array2) => [...array1, ...array2];
console.log("\nExercise3: " + combinesArrays([1, 2, 3], [4, 5, 6]));