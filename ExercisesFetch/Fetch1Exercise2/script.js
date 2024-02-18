let animalsDiv = document.querySelector(".animalsDiv");
let errorDiv = document.querySelector("#error");

async function fetchData(url) {
    return await fetch(url)
        .then(
            successResponse => {
                if (successResponse.status === 200) {
                    return successResponse.json();
                } else {
                    return successResponse.message;
                }
            },
            failResponse => {
                errorDiv.innerHTML = `<p>Error: ${failResponse.message}</p>`;
                return null;
            }
        );
}

let animalsData = await fetchData("animals.json");
console.log(animalsData);

let nameAnimals = Object.keys(animalsData.animals);
let dataAnimals = Object.values(animalsData.animals);

console.log(dataAnimals);

for (let i = 0; i < 6; i++) {
    animalsDiv.innerHTML += `<p>${nameAnimals[i]} - ${dataAnimals[i].species} - ${dataAnimals[i].foods}</p>`;
}


