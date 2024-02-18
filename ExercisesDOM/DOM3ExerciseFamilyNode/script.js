let container = document.querySelector(".container");

function showTagAndId(nodeId) {
    let element = document.querySelector(nodeId);

    if (element) {
        container.append(`${element.tagName} / ${element.id}`);
    } else {
        container.append(`The element can't show`);
    }
}

document.querySelector("#grandfather").addEventListener("click", () => {
    showTagAndId("#grandfather");
});

document.querySelector("#father1").addEventListener("click", () => {
    showTagAndId("#father1");
});

document.querySelector("#child1").addEventListener("click", () => {
    showTagAndId("#child1");
});

document.querySelector("#child2").addEventListener("click", () => {
    showTagAndId("#child2");
});

document.querySelector("#grandchild1").addEventListener("click", () => {
    showTagAndId("#grandchild1");
});

document.querySelector("#grandchild2").addEventListener("click", () => {
    showTagAndId("#grandchild2");
});

document.querySelector("#father2").addEventListener("click", () =>{
    showTagAndId("#father2");
});

document.querySelector("#child3").addEventListener("click", () =>{
    showTagAndId("#child3");
});