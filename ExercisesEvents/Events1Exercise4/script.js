let table = document.querySelector(".main");
//let info = document.querySelector(".info");
let previousRow = null;
let previousCol = null;

table.addEventListener("click", event => {
    let cell = event.target;
    let cellIndex = cell.cellIndex;
    let rowIndex = cell.parentElement.rowIndex;

    let rows = document.querySelectorAll("tr");

    if (previousRow !== null) {
        rows[previousRow].style.background = "";
    }
    if (previousCol !== null) {
        rows.forEach(tr => tr.cells[previousCol].style.background = "");
    }

    cell.style.background = "red";
    rows[rowIndex].style.background = "#ffeeba";
    rows.forEach(tr => tr.cells[cellIndex].style.background = "#ffeeba");


    previousRow = rowIndex;
    previousCol = cellIndex;
});



