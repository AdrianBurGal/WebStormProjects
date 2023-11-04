let element = document.querySelector("form .textBox");
let valid = document.querySelector("form .button")
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

valid.addEventListener("click", () => {
    let email = element.value;
    emailPattern.test(email) ? element.style.border = "2px solid green"
        : element.style.border = "2px solid red";
});


