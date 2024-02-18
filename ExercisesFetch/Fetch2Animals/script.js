async function getRemoteData(url) {
    let response = await fetch(url);
    if (response.ok && response.status === 200) {
        return response.json();
    } else {
        throw new Error("error...");
    }
}

let url = 'http://51.68.45.25/vpsDAW/animals.json';
let container = document.querySelector("#container");


getRemoteData(url)
    .then(data => {
        showData(data);
    })
    .catch(error => {
        container.innerHTML = "something went wrong";
        console.log(error);
    });

function showData(animals) {

    console.log(animals);

    nameAnimals = Object.keys(animals.animals);
    animalsData = Object.values(animals.animals);

    for (const animal of animalsData) {
        container.innerHTML += `<br>${animal.species}`;
        for (let index = 0; index < animal.foods.dislikes.length; index++) {
            container.innerHTML += ` - ${animal.foods.dislikes[index]}`;
            container.innerHTML += ` - ${animal.foods.likes[index]}`;
        }
    }

}