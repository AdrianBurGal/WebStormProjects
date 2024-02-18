
document.addEventListener("dblclick", () => {
    let bodyColour = Math.floor(Math.random() * 637292547).toString(16);
    bodyColour = "#" + ("000000" + bodyColour).slice(-6);
    document.body.style.backgroundColor = bodyColour;
});