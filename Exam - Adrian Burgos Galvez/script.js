async function getRemoteData(url) {
    let response = await fetch(url);
    if (response.ok && response.status === 200) {
        return response.json();
    } else {
        throw new Error("error...");
    }
}

/**************************************************************************************/

let dataMembers = await getRemoteData("members.json");
let dataTask = await getRemoteData("tasks.json");

let containerMembers = document.querySelector("#containerMembers");
let toDo = document.querySelector("#toDo");
let inProgress = document.querySelector("#inProgress");
let done = document.querySelector("#done");

let tasksToDo = [], tasksInProgress = [], tasksDone = [];
showMembers(dataMembers);
showTasks(dataTask);

/**************************************************************************************/
function showMembers(dataMembers) {
    let members = dataMembers.members;

    members.forEach(member => {
        let div = document.createElement("div");
        div.innerHTML += `
            <img src="img/${member.photo}" id="${member.id}">
            ${member.name} - ${member.badgets}
        `
        containerMembers.append(div);
    });
}

/**************************************************************************************/
function showTasks(dataTasks) {
    let tasks = dataTasks.tasks;

    /************************************************************************************/
    tasksToDo = tasks.filter(task => task.state === "toDo");
    toDo.innerHTML = `<h2>To Do (${tasksToDo.length})</h2>`

    tasksToDo.forEach(task => {
        toDo.innerHTML += `<div draggable="true" id="${task.id}">
                            <h4>${task.title}</h4>
                           </div>`;
    });

    /************************************************************************************/
    tasksInProgress = tasks.filter(task => task.state === "inProgress");
    inProgress.innerHTML = `<h2>In Progress (${tasksInProgress.length})</h2>`;

    tasksInProgress.forEach(task => {
        inProgress.innerHTML += `<div id="${task.id}">
                                    <h4>${task.title}</h4>
                                    <p>${task.description}</p>
                                    <input type="checkbox">
                                 </div>`;
    });

    /************************************************************************************/
    tasksDone = tasks.filter(task => task.state === "done");
    done.innerHTML = `<h2>Done (${tasksDone.length})</h2>`

    tasksDone.forEach(task => {
        done.innerHTML += `<div id="${task.id}">
                                <h4>${task.title}</h4>
                                <p>${task.description}</p>
                           </div>`;
    });
    styleTask();
}

/************************************************************************************/
containerMembers.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("img", event.target.id);
});

toDo.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("id", event.target.id);
    console.log(event.target)
})

toDo.addEventListener("drop", (event) => {
    let currentTask = event.target;
    let currentID = event.dataTransfer.getData("img");
    let currentMember = dataMembers.members.find(member => member.id === currentID);
    currentTask.innerHTML += `<img src="img/${currentMember.photo}">`

    // Add member in the task;
    tasksToDo[currentTask.id].members.push(currentID);

});

/************************************************************************************/
inProgress.addEventListener("drop", (event) => {
    let currentTaskID = event.dataTransfer.getData("id");

    if (dataTask.tasks[currentTaskID].members.length > 0) {
        dataTask.tasks[currentTaskID].state = "inProgress";
        showTasks(dataTask);
    }

    let membersTask = dataTask.tasks[currentTaskID].members;

    //inProgress.append(dataMembers.find())
});

/************************************************************************************/
inProgress.addEventListener("click", (event) => {
    let currentTask = event.target.parentNode.id;
    dataTask.tasks[currentTask].state = "done";


    dataMembers.members.find(member => member.id === "M1")
    console.log(dataMembers)
    showTasks(dataTask);
});
/************************************************************************************/

function styleTask() {
    let today = new Date();
    dataTask.tasks.forEach(task => {
        if (today > new Date(task.dueDate)) {
            let taskElement = document.getElementById(task.id);
            taskElement.style.backgroundColor = "#FF5757";
        }
    });
}

/************************************************************************************/
containerMembers.addEventListener("dragover", (event) => {
    event.preventDefault();
});

toDo.addEventListener("dragover", (event) => {
    event.preventDefault();
});

inProgress.addEventListener("dragover", (event) => {
    event.preventDefault();
});

/*****************************************************************************************/
let addTaskButton = document.querySelector("#addTask");

addTaskButton.addEventListener("click", () => {

    let newTask = {
        id: dataTask.tasks.length,
        title: document.querySelector("#title").value,
        description: document.querySelector("#description").value,
        members: [],
        dateCreation: new Date().toLocaleDateString(),
        dueDate: "",
        state: "toDo"
    }
    dataTask.tasks.push(newTask);
    showTasks(dataTask);
});

/****************************************************************************************/
let showJSON = document.querySelector("#showJSON");
let toDoButton = document.querySelector("#toDoButton");
let inProgressButton = document.querySelector("#inProgressButton");
let toDoneButton = document.querySelector("#toDoneButton");

toDoButton.addEventListener("click", () => {
    showJSON.innerHTML = "<br>" + JSON.stringify(tasksToDo);
});

inProgressButton.addEventListener("click", () => {
    showJSON.innerHTML = "<br>" + JSON.stringify(tasksInProgress);
});

toDoneButton.addEventListener("click", () => {
    showJSON.innerHTML = "<br>" + JSON.stringify(tasksDone);
});