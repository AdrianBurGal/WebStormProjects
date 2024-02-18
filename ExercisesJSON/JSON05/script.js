async function getRemoteData(url) {
    let response = await fetch(url);
    if (response.ok && response.status === 200) {
        return response.json();
    } else {
        throw new Error("error...");
    }
}

/*******************************************************************************/

let url = 'movies.json'
let moviesData = await getRemoteData(url);
let container = document.querySelector("#container");

moviesData.movies.forEach(movie => {
    const charactersHtml = movie.main_characters.map(character => `<span>${character}</span>`).join(', ');

    container.innerHTML += `
        <div id="${movie.episode_number}">
            <img src="img/${movie.poster}">
            <h4>${movie.title}</h4>
            <p>Characters: ${charactersHtml}</p>
        </div>
    `;
    console.log(movie.title)
});

console.log(moviesData);