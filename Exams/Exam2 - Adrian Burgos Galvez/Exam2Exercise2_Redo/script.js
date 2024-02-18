async function getRemoteData(url) {
    let response = await fetch(url);
    if (response.ok && response.status === 200) {
        return response.json();
    } else {
        throw new Error("error...");
    }
}

/********************************************************************************************/

let container1 = document.querySelector("#container1");
let container2 = document.querySelector("#container2");
let container3 = document.querySelector("#container3");

let url = 'pizza.json';
let menu = await getRemoteData(url);
let pizzas = menu.Menu;

showPizza(pizzas, container1);

/********************************************************************************************/

function showPizza(pizzas, container) {

    pizzas.forEach(pizza => {

        let divPizza = document.createElement("div");
        let img = document.createElement("img");
        let pTopping = document.createElement("p");

        divPizza.id = `${pizza.id}`;
        divPizza.innerHTML = `<h4>${pizza.name}</h4>`;
        img.src = `${pizza.asset.url}`;
        img.id = `${pizza.id}`;
        divPizza.append(img);

        img.addEventListener("click", () => {
            pTopping.innerHTML = '';
            pizza.toppings.forEach(topping => {
                pTopping.innerHTML += topping.name + "<br>";
            });
            divPizza.append(pTopping);
        });
        container.append(divPizza);
    });
}

container1.addEventListener("dragover", (event) => {
    event.preventDefault();
});

container2.addEventListener("dragover", (event) => {
    event.preventDefault();
});

container1.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("id", event.target.id);
});

container2.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("id", event.target.id);
});

container1.addEventListener("drop", (event) => {
    container1.innerHTML = '';
    container2.innerHTML = '';
    container3.innerHTML = '';
    showPizza(pizzas, container1);
});

/********************************************************************************************/

container2.addEventListener("drop", (event) => {

    if (container2.innerHTML === '') {

        remove(event);

        let currentIdPizza = event.dataTransfer.getData("id");
        let currentPizza = [];

        menu.Menu.forEach(pizza => {
            if (pizza.id.toString() === currentIdPizza) {
                currentPizza.push(pizza);
            }
        });
        showPizza(currentPizza, container2);

        currentPizza[0].sizes.forEach(size => {
            container2.innerHTML += `<input type="radio" name="size" value="${size}">${size}`
        });

        let inputs = document.querySelectorAll("input");
        inputs.forEach(input => {
            input.addEventListener("click", (event) => {
                showAllData(currentPizza, event.target.value);
            });
        });
    }
});

/********************************************************************************************/

function showAllData(pizza, size) {
    container3.innerHTML =
            `
                <h4>${pizza[0].name} </h4>
                <h4>Size: ${size} </h4>
                <h4>Ingredients: </h4>
            `
    pizza[0].toppings.forEach(topping => {
        container3.innerHTML += `<input type="checkbox" checked>${topping.name}<br>`
    });
    container3.innerHTML += `<button type="submit">Order</button>`
}

/********************************************************************************************/

function remove(event) {

    let currentIdPizza = event.dataTransfer.getData("id");
    let divPizzas = container1.querySelectorAll("div");

    divPizzas.forEach(div => {
        if (div.id === currentIdPizza.toString()) {
            div.remove();
        }
    });
    container2.innerHTML = '';
    container3.innerHTML = '';
}

/********************************************************************************************/