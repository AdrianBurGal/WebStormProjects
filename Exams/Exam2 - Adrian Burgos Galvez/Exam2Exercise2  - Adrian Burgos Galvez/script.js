async function getRemoteData(url) {
    let response = await fetch(url);
    if (response.ok && response.status === 200) {
        return response.json();
    } else {
        throw new Error("error...");
    }
}


let div1 = document.querySelector("#item1");
let div2 = document.querySelector("#item2");
let div3 = document.querySelector("#item3");

let url = 'pizza.json';
let pizzasData = await getRemoteData(url);

console.log(pizzasData);
/*******************************************************************************************************/

showData(pizzasData);

function showData(pizzas) {
    let pizzaData = pizzas.Menu;

    pizzaData.forEach(pizza => {
        div1.innerHTML += `<p><b>${pizza.name}</b></p>`;
        let image = document.createElement("img");
        image.setAttribute("src", `${pizza.asset.url}`);
        image.setAttribute("id", `${pizza.id}`);

        div1.append(image);

    });
}

div1.addEventListener("click", async event => {

    let pizzasData = await getRemoteData(url);

    let pizzaData = pizzasData.Menu;
    let toppingName = document.createElement("p");

    if (event.target.tagName === 'IMG') {
        let currentPizza = event.target;

        pizzaData.forEach(pizza => {
            if (parseInt(pizza.id) === parseInt(currentPizza.id)) {
                pizza.toppings.forEach(topping => {
                    toppingName.innerHTML += topping.name + " - ";
                });
            }
        });
        currentPizza.after(toppingName);
    }
});

div1.addEventListener("dragover", event => {
    event.preventDefault();
});

div2.addEventListener("dragover", event => {
    event.preventDefault();
});

div1.addEventListener("dragstart", event => {
    let currentPizza = event.target;
    event.dataTransfer.setData("text", currentPizza.id);
});

div2.addEventListener("dragstart", event => {
    let currentPizza = event.target;
    event.dataTransfer.setData("text", currentPizza.id);
});

div2.addEventListener("drop", async event => {
    event.preventDefault();
    let data = '';
    if (div2.innerHTML === "") {
        data = event.dataTransfer.getData("text");
        let element = document.getElementById(data);
        div2.append(element);
    }

    let pizzasData = await getRemoteData(url);
    let pizzaData = pizzasData.Menu;

    pizzaData.forEach(pizza => {
        if (parseInt(pizza.id) === parseInt(data)) {
            pizza.sizes.forEach(size => {
                div2.innerHTML += `<input type=radio name="size">${size}`
            });
        }
    });
});

div1.addEventListener("drop", async event => {
    event.preventDefault();

    let data = event.dataTransfer.getData("text");
    let element = document.getElementById(data);
    div1.append(element);
    div2.innerHTML = '';

});

div2.addEventListener("click", async event => {
    if (event.target.tagName === 'INPUT') {

        let pizzasData = await getRemoteData(url);
        let pizzaData = pizzasData.Menu;

        let data = document.querySelector('img');

        pizzaData.forEach(pizza => {

            if (parseInt(pizza.id) === parseInt(data.id)) {

                div3.innerHTML += `<p> <b>${pizza.name}</b></p>
                                   <p> ${pizza.size} </p> `;
                pizza.toppings.forEach(topping => {
                    console.log(topping)
                    div3.innerHTML += `<input type=checkbox checked>${topping.name}<br>`
                });

                div3.innerHTML += '<button type="submit">Order</button>';
            }
        })

    }

})