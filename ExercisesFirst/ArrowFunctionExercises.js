/*Convert these function declarations into arrow functions.*/

function add(a, b) {
    return a + b;
}

let add1 = (a, b) => a + b;
console.log("Result1: " + add1(2, 3));

/***************************************************************************************/

function multiply(x, y) {
    return x * y;
}

let multiply1 = (x, y) => x * y;
console.log("Result2: " + multiply1(2, 3));

/***************************************************************************************/

function greet(name) {
    return "Hello, " + name + "!";
}

let greet1 = name => "Hello, " + name + "!";
console.log("Result3: " + greet1("Adrian"));

/***************************************************************************************/

function power(base, exponent) {
    return Math.pow(base, exponent);
}

let power1 = (base, exponent) => Math.pow(base, exponent);
console.log("Result4: " + power1(2, 3));

/***************************************************************************************/

function isEven(num) {
    return num % 2 === 0;
}

let isEven1 = num => num % 2 === 0;
console.log("Result5: " + isEven1(2));

/***************************************************************************************/

/*Creates a function declaration to calculate the factorial of a number.
    ● Convert it into an arrow function with a single expression.
    ● Convert it into an arrow function with a block body.*/

function factorial(number) {
    let result = 1;
    for (let index = 0; index < number; index++) {
        result *= number - index;
    }
    return result;
}
console.log("Result6: " + factorial(4));

/***************************************************************************************/

let factorial1 = number => number > 0 ? number = (number * factorial1((number - 1))) : number = 1;
console.log("Result7: " + factorial1(4));

/***************************************************************************************/
let factorial2 = number => {
    let result = 1;
    for (let index = 0; index < number; index++) {
        result *= number - index;
    }
    return result;
}
console.log("Result8: " + factorial2(4));