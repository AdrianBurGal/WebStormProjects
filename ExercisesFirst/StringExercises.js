/*1. Create a script with 2 string variables.
    ● Display both variables between single quotes.
    ● Display both variables separated by a line break.
a) Using traditional string concatenation.
b) Using string literals.*/

let string1 = "Hello";
let string2 = "Adrián";

console.log("Result1 : " + "'" + string1 + " " + string2 + "'");
console.log("Result1 : " + `'${string1} ${string2}'`);

/*2. In this exercise, you will create a function that accepts the components of an email
sending service and combines them into an email body template. To make things more
interesting, only adults are eligible to post comments on the website. Accordingly, the
message text will change.

    ● check the passed parameters now. If any are invalid or missing, the function will
      simply return null.
    ● use the ternary operator to check whether this person is of legal age or not. */

function sendEmail(name, age, comments) {
    let string = `A user has posted a comment from the website: \nName: ${name} | Age: ${age}\n`;
    string += age > 17 ? `${name} is a valid user` : `${name} is not a valid user`;
    string += `\nCommments: ${comments}`;
    return string;
}

console.log("\nResult2 : " + sendEmail("Jane", 27, "Your website is fantastic!"));

/*3. Write a JavaScript program to replace every character in a given string with the character
following it in the alphabet.*/

function replaceCharacter(string) {
    let arr = string.split('');

    let newArr = arr.map(chars =>
        String.fromCharCode(chars.charCodeAt(0) + 1)
    );
    return newArr.join('');
}

console.log("\nResult3 : " + replaceCharacter("aBcDe"));

/*4. Write a JavaScript function to extract a specified number of characters from a string.*/

function extract(string, number) {
    let arrayChar = string.split('');
    let newArrayChar = [];
    for (let index = 0; index < number; index++) {
        newArrayChar[index] = arrayChar[index];
    }
    return newArrayChar.join('');
}

console.log("\nResult4 : " + extract("Hello world", 8));

function extractFilter(string, number) {
    return string.split('').filter((x, y) => y < number).join('');
}

console.log("Result4 : " + extractFilter("Hello Hello", 6));

/*5. Write a JavaScript function to convert a string into abbreviated form.*/

function abbrevName(string) {
    let newArray = string.split('');

    for (let index = newArray.indexOf(" ") + 2; index < newArray.length; index++) {
        newArray[index] = "";
    }
    newArray.push(".");
    return newArray.join('');
}

console.log("\nResult5 : " + abbrevName("Robin Singh"));

function abbrevName2(string) {

    let array = string.split(" ");

    for (let i = 1; i < array.length; i++) {
        array[i] = array[i].slice(0, 1) + ".";
    }
    return array.join(" ");
}

console.log("Result5 : " + abbrevName2("Robin Singh Fur"));

/*6. Write a JavaScript function that hides email addresses to prevent unauthorized access.*/

function protect_email(email) {
    let array = email.split("@");
    return array[0].substring(0, 4) + "...@" + array[1];
}

console.log("\nResult6 : " + protect_email("robin_singh@example.com"));

/*7. Write a JavaScript function to parameterize a string. */

function string_parameterize(string) {
    let strParameterize = string.split("");

    for (let index = 0; index < strParameterize.length; index++) {
        strParameterize[index] = strParameterize[index].toLowerCase();
        if (strParameterize[index] === " ") {
            strParameterize[index] = "-";
        }
    }
    return strParameterize.join('');
}

console.log("\nResult7 : " + string_parameterize("Robin Singh from USA."));

/*8. Write a JavaScript function to capitalize the first letter of each word in a string.*/

function capitalizeWords(string) {
    let capWords = string.split('');

    for (let index = 0; index < capWords.length; index++) {
        if (index === 0 || capWords[index - 1] === ' ') {
            capWords[index] = capWords[index].toUpperCase();
        }
    }
    return capWords.join('');
}

console.log("\nResult8 : " + capitalizeWords('js string exercises'));

/*9. Write a JavaScript function that takes a string with both lowercase and upper case letters
as a parameter. It converts upper case letters to lower case, and lower case letters to
upper case.*/

function swapcase(string) {
    let swapCase = string.split('');

    for (let index = 0; index < swapCase.length; index++) {
        if (swapCase[index] === swapCase[index].toUpperCase()) {
            swapCase[index] = swapCase[index].toLowerCase();
        } else {
            swapCase[index] = swapCase[index].toUpperCase();
        }
    }
    return swapCase.join('');
}

console.log("\nResult9 : " + swapcase('AaBbc'));

/*10. Write a JavaScript function to convert a string into camel case.*/

function camelize(string) {
    let camel = string.split(" ");

    //return camel[0] + camel[1].charAt(0).toUpperCase() + camel[1].slice(1, camel[1].length);

    for (let index = 0; index < camel.length; index++) {
        if (camel[index] === ' ') {
            camel[index++] = "";
            camel[index] = camel[index].toUpperCase();
        }
    }
    return camel.join('');
}

console.log("\nResult10: " + camelize("JavaScript exercises"));
console.log("Result10: " + camelize("JavaScript exercises foo"));
console.log("Result10: " + camelize(" "));
//console.log("Result10: " + camelize());

/*11. Write a JavaScript function to uncommelize a string.*/

function uncamelize(string, char = ' ') {
    let newString = string.split('');

    for (let index = 0; index < newString.length; index++) {
        if (newString[index] === newString[index].toUpperCase()) {
            newString[index] = char + newString[index].toLowerCase();
        }
    }
    return newString.join('');
}

console.log("\nResult11: " + uncamelize('helloWorld'));
console.log("Result11: " + uncamelize('helloWorld', '-'));
console.log("Result11: " + uncamelize('helloWorld', '_'));
