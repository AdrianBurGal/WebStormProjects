let time = document.querySelector(".timer");
let buttonStart = document.querySelector("#start");
let buttonStop = document.querySelector("#stop");

let chronometer, seconds = 0, minutes = 0, start = true;

buttonStart.addEventListener("click", () => {
    start = true;
    if (start) {
        chronometer = setInterval(() => {
            if (seconds++ === 59) {
                seconds = 0;
                minutes++;
            }
            time.innerText = `${minutes}`.padStart(2, "0") + ":" + `${seconds}`.padStart(2, "0");
        }, 1000);
    }
});

buttonStop.addEventListener("click", () => {
    clearInterval(chronometer);
    seconds = 0;
    minutes = 0;
    time.innerText = `${minutes}`.padStart(2, "0") + ":" + `${seconds}`.padStart(2, "0");
    start = false;
});