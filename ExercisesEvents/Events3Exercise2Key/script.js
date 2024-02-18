
let input = document.querySelector("#input");

input.addEventListener("keydown", function (ev) {

    console.log(ev);

    if (isNaN(ev.key)) {
        ev.preventDefault();
    }

});