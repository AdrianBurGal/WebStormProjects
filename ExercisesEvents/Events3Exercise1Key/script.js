
let image = document.querySelector("#image");
let imageScale = 1.0;

document.addEventListener("keydown", function (ev) {
    if (ev.key === 'ArrowUp') {
        imageScale *= 1.1;
    } else if (ev.key === 'ArrowDown') {
        imageScale /= 1.1;
    }
    updateImageSize();
});

function updateImageSize() {
    image.style.transform = `scale(${imageScale})`;
}