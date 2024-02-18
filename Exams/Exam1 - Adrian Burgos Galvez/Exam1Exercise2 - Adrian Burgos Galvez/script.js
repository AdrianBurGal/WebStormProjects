const tasksAll =
    {
        "tasksList": [
            {
                "assignedTo": "Jon",
                "task": "Task_1",
                "duration": 1,
                "break": 5
            },
            {
                "assignedTo": "Doe",
                "task": "Task_2",
                "duration": 1,
                "break": 3
            },
            {
                "assignedTo": "Foo",
                "task": "Task_3",
                "duration": 60,
                "break": 15
            },
            {
                "assignedTo": "Jan",
                "task": "Task_4",
                "duration": 60,
                "break": 15
            },
            {
                "assignedTo": "Bar",
                "task": "Task_5",
                "duration": 60,
                "break": 15
            },
            {
                "assignedTo": "Fell",
                "task": "Task_6",
                "duration": 60,
                "break": 15
            }

        ]
    };

let time = document.querySelector(".timer");

let startButton = document.querySelector("#start");
let stopButton = document.querySelector("#stop");

let tasksData = tasksAll.tasksList;
let container = document.querySelector(".table");

function showTable(tasks) {
    tasks.forEach(task => {

        let row = document.createElement("tr");

        row.innerHTML = `
        <td><h2> ${task.assignedTo}</h2></td>
        <td>${task.task}</td>
        <td>${task.duration}:00</td>
        <td>${task.break}:00</td>
        `
        container.append(row);
    })
}

showTable(tasksData);

let durationTimer = document.querySelectorAll("tr td:nth-child(3)");
let durationBreak = document.querySelectorAll("tr td:nth-child(4)");

startButton.addEventListener("click", () => {
    showChronometer();
    showTimerDuration();
    //showTimerBreak();
});

function showChronometer() {
    let seconds = 0, minutes = 0;
    setInterval(() => {
        if (seconds++ === 59) {
            seconds = 0;
            minutes++;
        }
        time.innerText = `${minutes}`.padStart(2, "0") + ":" + `${seconds}`.padStart(2, "0");
    }, 1000);
}

function showTimerDuration() {

    let listMinutes = tasksData.map(task => task.duration);
    let seconds = 0;

    setInterval(() => {

        if (seconds-- === 0) {

            for (let timer = 0; timer < listMinutes.length; timer++) {
                listMinutes[timer]--;
                if (listMinutes[timer] === -1 && seconds === -1) {
                    showTimerBreak(timer);
                }
            }
            seconds = 59;
        }
        for (let i = 0; i < durationTimer.length; i++) {
            durationTimer[i].innerText = `${listMinutes[i]}`.padStart(2, "0") + ":" + `${seconds}`.padStart(2, "0");
        }
    }, 1000);

}

function showTimerBreak(timer) {

    let listMinutes = tasksData.map(task => task.break);
    let seconds = 0;

    setInterval(() => {
        if (seconds-- === 0) {
            seconds = 59;
            listMinutes[timer]--;
        }
        for (let i = 0; i < durationBreak.length; i++) {
            durationBreak[timer].innerText = `${listMinutes[timer]}`.padStart(2, "0") + ":" + `${seconds}`.padStart(2, "0");
        }
    }, 1000);
}

stopButton.addEventListener("click", () => {
});
