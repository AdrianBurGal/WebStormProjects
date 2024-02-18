let items = {
    "items":
        [
            {
                name: "banana",
                num: 5
            },
            {
                name: "apple",
                num: 2
            },
            {
                name: "milk",
                num: 1
            },
            {
                name: "cheese",
                num: 1
            },
            {
                name: "bread",
                num: 1
            },
            {
                name: "juice",
                num: 3
            },
            {
                name: "pasta",
                num: 1
            },
            {
                name: "eggs",
                num: 6
            },
            {
                name: "grapes",
                num: 2
            },
        ],
}

let itemsData = items.items;

function drag(event) {
    let item = itemsData[Math.floor(Math.random() * itemsData.length)];
    let itemString = JSON.stringify(item);

    let image = new Image();
    image.src = `items/${item.name}.png`;
    event.setData();

    event.dataTransfer.setData("item", itemString);
}

function drop(event) {
    event.preventDefault();
    let item = JSON.parse(event.dataTransfer.getData("item"));

    let container = document.querySelector("table");
    let tr = document.createElement("tr");

    tr.innerHTML = `<td><img src="items/${item.name}.png"></td><td>${item.num}</td>`
    container.append(tr);
}

function allowDrop(event) {
    event.preventDefault();
}