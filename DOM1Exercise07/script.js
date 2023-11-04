
let table = document.querySelector("table tbody");
let addUp = document.querySelector(".addColumns .button:nth-child(1)");
let addDown = document.querySelector(".addColumns .button:nth-child(2)");
let addLeft = document.querySelector(".addRows .button:nth-child(1)");
let addRight = document.querySelector(".addRows .button:nth-child(2)");

let createColumn = () => (document.createElement("td"));

let createRow = () => {

    let numTd = document.querySelectorAll(".container table:first-child tr:first-child td").length;
    let tds = Array.from({length:numTd}, createColumn);
    let tr = document.createElement("tr");

    tr.append(...tds);
    return tr;
}

addUp.addEventListener("click", () => table.prepend(createRow()));
addDown.addEventListener("click", () => table.append(createRow()));

addLeft.addEventListener("click", () => {
  document.querySelectorAll(".container table tbody tr")
      .forEach(tr => tr.prepend(createColumn()));
});

addRight.addEventListener("click", () => {
   document.querySelectorAll(".container table tbody tr")
       .forEach(tr => tr.append(createColumn()));
});
