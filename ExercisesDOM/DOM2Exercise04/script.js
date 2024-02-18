
let container = document.querySelector(".imageViewer");
let nextButton = document.querySelector(".next");
let previousButton = document.querySelector(".previous");
let createImage = document.createElement("img");
let imagesList = ["mandarina", "manzana", "pera", "platano"];
let index = 0;

nextButton.addEventListener("click", () => {
    index++;
    index === imagesList.length ? index = 0 : index;
    createImage.src = `photos/${imagesList[index]}.png`;
    container.append(createImage);
});

previousButton.addEventListener("click", () => {
    index--;
    index === -1 ? index = imagesList.length -1 : index;
    createImage.src = `photos/${imagesList[index]}.png`;
    container.append(createImage);
});