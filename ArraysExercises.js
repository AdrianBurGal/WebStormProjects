/*1. Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array.*/


/*2. Array with student names, they can have two formats:
    - Firstname lastname1 lastname2
    - Firstname lastname
Make a function to sort the array by last name.*/

let names = ["Adrian Burgos Galvez", "Pablo Burgos Galvez", "Antonio Burgos Mendez", "Ana Galvez"];

function sortNames(names) {

    let nameComplete = names[1].split(' ');
    let name = nameComplete[0].split(' ');
    let lastName1 = nameComplete[1].split(' ');
    let lastName2 = nameComplete[2].split(' ');

    for (let index = 0; index < names.length; index++) {

    }

    console.log(name);
    console.log(lastName1);
    console.log(lastName2);

}

sortNames(names);

console.log("\nExercise3: " + names.sort((name1, name2) => {

    let nameComplete1 = name1.split(' ');
    let nameComplete2 = name2.split(' ');

    let nameA = nameComplete1[0].split(' ');
    let nameB = nameComplete2[0].split(' ');

    let lastName1A = nameA[1];
    let lastName1B = nameB[1];

    let lastName2A = nameA[2] || '';
    let lastName2B = nameB[2] || '';

    if (lastName1A.localeCompare(lastName1B) === 0) {
        if (lastName2A.localeCompare(lastName2B) === 0) {
            return nameA.localeCompare(nameB);
        }
    }

}));

/*3. Using the function every, check if one array is exactly the same as another.*/

function equalArray(array1, array2) {

    let equals = false;
    let index = 0;

    if (array1.length === array2.length) {
        equals = true;
        while (index < array1.length && equals) {
            equals = array1[index] === array2[index];
            index++;
        }
    }
    return equals;
}

console.log("\nExercise3: " + equalArray([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]))
console.log("Exercise3: " + equalArray([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 7]))
console.log("Exercise3: " + equalArray([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5]))

/*4. Create a script that removes all duplicate elements in an array.*/

function removeDuplicate(array) {

    let arrayNoDuplicate = [];
    let add = true;

    for (let index1 = 0; index1 < array.length; index1++) {
        for (let index2 = 0; index2 < array.length; index2++) {
            if (array[index1] === arrayNoDuplicate[index2]) {
                add = false;
            }
        }
        if (add) {
            arrayNoDuplicate.push(array[index1]);
        }
        add = true;
    }
    return arrayNoDuplicate;
}

console.log("\nExercise4: " + removeDuplicate([1, 2, 6, 4, 5, 4, 6, 6, 5, 6, 9]))

/*5. In this exercise you must try each of the array cloning methods listed in the notes.
- Clone a one-dimensional array. Make changes to the cloned array. Check if
    everything works as expected.
- Clone a two-dimensional array. Make changes to the cloned array and one of the
internal arrays. Check if everything works as expected.*/