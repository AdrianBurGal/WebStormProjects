let container = document.querySelector(".showShapes");
let createImage = document.createElement("img");

let circle = document.querySelector("form .circle");
let polygon = document.querySelector("form .polygon");
let square = document.querySelector("form .square");
let triangle = document.querySelector("form .triangle");

let button = document.querySelector("form .button");

circle.addEventListener("click", () => {
    createImage.src = "shapes/circle.png";
    container.append(createImage);
});

polygon.addEventListener("click", () => {
    createImage.src = "shapes/polygon.png";
    container.append(createImage);
});

square.addEventListener("click", () => {
    createImage.src = "shapes/square.png";
    container.append(createImage);
});

triangle.addEventListener("click", () => {
    createImage.src = "shapes/triangle.png";
    container.append(createImage);
});

button.addEventListener("click", () => {
    let side, radius, base, height, apothem;

    if (circle.checked) {
        radius = prompt("Tell me the radius of the circle");
        container.append(`The area is ${Math.round(2 * 3.14 * radius)} cm².`);
    }

    if (polygon.checked) {
        side = prompt("Tell me the side of the polygon");
        apothem = prompt("Tell me the apothem of the polygon");
        container.append(`The area is ${(side * 5 * apothem) / 2} cm²`);
    }

    if (square.checked) {
        side = prompt("Tell me the side of the square");
        container.append(`The area is ${side * side} cm².`);
    }

    if (triangle.checked) {
        height = prompt("Tell me the height of the triangle");
        base = prompt("Tell me the base of the triangle");
        container.append(`The area is ${(height * base) / 2} cm²`);
    }
});
