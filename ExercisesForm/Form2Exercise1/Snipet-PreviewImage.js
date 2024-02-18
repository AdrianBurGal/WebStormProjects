function previewImage(input) {
    const file = input.files[0];

    if (file) {
        const preview = document.createElement("img");
        preview.src = URL.createObjectURL(file);
        preview.width = 250;
        const photoPreview = document.getElementById("photoPreview");

        photoPreview.innerHTML = "";
        photoPreview.appendChild(preview);
    } else {
        console.error("No file selected.");
    }
}