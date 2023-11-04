/*1. Write a function that receives a date and displays the corresponding day of the week.*/

function dayOfWeek(date) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let newDate = new Date(date);
    return daysOfWeek[newDate.getDay()];
}

console.log("Result1 : " + dayOfWeek("2023-10-12"));
console.log("Result1 : " + dayOfWeek("2023-10-18"));

/*2. Write a function that displays the date in the following formats.
    - The date will be passed as a parameter, otherwise the current date will be taken.
    - The separator (- /) shall be passed as a parameter, otherwise one of them will be set by default.
    ● mm-dd-yyyy
    ● dd-mm-yyyy*/

    function formatDate(inputDate, separator = '-') {
        const date = inputDate ? new Date(inputDate) : new Date();

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        const format1 = `${month}${separator}${day}${separator}${year}`;
        const format2 = `${day}${separator}${month}${separator}${year}`;

        return `${format1}\n          ${format2}`;
    }

console.log("\nResult2 : " + formatDate("2023-10-18", '/'));

/*3. Call the previous function with tomorrow's date*/

function tomorrowDate(date) {
    let todayDate = new Date(date);
    let tomorrowDate = new Date(todayDate.setDate(todayDate.getDate() + 1));
    return tomorrowDate.toLocaleDateString();
}

console.log("\nResult3 : " + tomorrowDate("2023-10-12"));
console.log("Result3 : " + tomorrowDate(Date.now()));

/*4. Write a function that returns a string such as HH:MM:SS from any date.*/

function stringHour(date) {
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
console.log("\nResult4 : " + stringHour(new Date()));

/*5. Write a function to display the current day and time in the following format. (Tuesday. Now: 10PM 30:38)*/

function currentDay(date) {

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = daysOfWeek[date.getDay()];

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return `${day}. Now: ${hours}${hours > 12 ? "PM" : "AM"} ${minutes}:${seconds}`;
}

console.log("\nResult5 : " + currentDay(new Date()));

/*6. How many days have passed since September 15?*/

function daysSince(date) {

    let todayDate = new Date();
    let newDate = new Date(date);

    let difference = todayDate - newDate;

    return (difference / (1000 * 60 * 60 * 24));

}
console.log("\nResult6 : " + daysSince("2023/09/15") + " days");

/*7. Write a function that calculates the number of school days remaining until the end of the term, without
taking into account holidays.*/



/*8. Write a function that indicates in which years from the current year through 2070 September 15 will be Monday.*/



/*9. Write a function that indicates what day was X days ago and how long it has been since then,
showing years, months, days, as appropriate.*/

function appropriateDate(days) {
    let year = 0, month = 0, week = 0;
        while (days >= 365) {
            days =  days - 365;
            year++;
        }
        while (days >= 30) {
            days =  days - 30;
            month++;
        }
        while (days >= 7) {
            days =  days - 7;
            week++;
        }
    return `${year} year(s), ${month} month(s), ${week} week(s), ${days} day(s) have passed.`;
}

console.log("\nResult9 : " + appropriateDate(365));

/*10. Now develop a similar function but for X days from now.*/

function daysX(days) {

    let today = new Date();
    let future = new Date(today);

    return future.setDate(today.getDate() + days);
}

console.log("\nResult10: " + daysX(30));

/*11. Write a function that displays a digital clock which is updated every second.*/


/*12. Create a timer to be updated every second, the initial value can be set in hours, minutes and
seconds.*/



/*13. Using the previous script, make the high school page load when it reaches 0, you can use the
location object for this purpose.*/



/*14. Create a chronometer, to start and stop it, use the corresponding buttons.*/

