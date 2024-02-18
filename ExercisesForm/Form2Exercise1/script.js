document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("photo").addEventListener("change", function () {
        previewImage(this);
    });

    document.getElementById("submitButton").addEventListener("click", function () {
        if(!submitForm()){
            return false;
        }
    });

    document.getElementById("clearButton").addEventListener("click", function () {
        clearForm();
    });
});

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


function clearForm() {
    document.getElementById("myForm").reset();
    document.getElementById("photoPreview").innerHTML = "";
}

function submitForm() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let angry = document.getElementById("angry");
    let sad = document.getElementById("sad");
    let happy = document.getElementById("happy");
    let ambivalent = document.getElementById("ambivalent");
    let satisfaction = document.querySelector('input[name="satisfaction"]:checked');
    let comments = document.getElementById("comments");
    let photoInput = document.getElementById("photo");
    let photoPreview = document.getElementById("photoPreview");

    let allFilled = true;
    let inputs  = document.querySelectorAll("input");
    for (let input of inputs) {
        if(!input.value){
            input.style.border = "1px solid red";
            console.log(input)
            allFilled =  false;
        }
    }
    if(!allFilled){
        clearForm();
        return false;
    }

    /*if (!name || !email || !password || !angry || !sad || !happy || !ambivalent || !satisfaction || !comments || !photoInput || !photoPreview) {
        alert("Please fill in all required fields and select at least one emotion.");
    }*/

    let file = photoInput.files[0];
    /*if (!file) {
        alert("Please select a bio photo.");
    }*/
    let tableBody = document.getElementById("tableBody");
    let newRow = tableBody.insertRow(tableBody.rows.length);

    let idx = 0;
    newRow.insertCell(idx++).innerHTML = name.value;
    newRow.insertCell(idx++).innerHTML = email.value;
    newRow.insertCell(idx++).innerHTML = password.value;
    newRow.insertCell(idx).innerHTML += angry.checked ? "Angry " : "";
    newRow.cells.item(idx).innerHTML += sad.checked ? "Sad " : "";
    newRow.cells.item(idx).innerHTML += happy.checked ? "Happy " : "";
    newRow.cells.item(idx++).innerHTML += ambivalent.checked ? "Ambivalent " : "";
    newRow.insertCell(idx++).innerHTML = satisfaction.value;
    newRow.insertCell(idx++).innerHTML = comments.value;

    let bioPhotoCell = newRow.insertCell(idx);
    const thumbnail = document.createElement("img");
    thumbnail.src = URL.createObjectURL(file);
    thumbnail.width = 250;
    bioPhotoCell.appendChild(thumbnail);

    clearForm();
}
