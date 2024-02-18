let books = {
    "books": [
        {
            ISBN: crypto.randomUUID(),
            title: "La isla del tesoro",
            genre: "adventure",
            author: ["Robert Louis Stevenson"],
            pages: "205",
            published: "1883",
            read: true,
            website: "",
        },
        {
            ISBN: crypto.randomUUID(),
            title: "Robinson Crusoe",
            genre: "novel",
            author: ["Daniel Defoe"],
            pages: "230",
            published: "1719",
            read: false,
            website: "",
        },
        {
            ISBN: crypto.randomUUID(),
            title: "Colmillo Blanco",
            genre: "novel",
            author: ["Jack London"],
            pages: "305",
            published: "1906",
            read: true,
            website: "",
        },]
};

let dataBooks = books.books;
let container = document.querySelector(".dataTable");

let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let button3 = document.querySelector(".button3");
let buttonReset = document.querySelector(".reset");

function showTable(allBooks) {
    container.innerHTML = '';
    allBooks.forEach(book => {

        let row = document.createElement("tr");
        row.setAttribute("data-isbn", `${book.ISBN}`);

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.genre}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>${book.published}</td>
        <td>${book.read ? "✅" : "❌"}</td>
        <td>${book.website}</td>
    `
        container.append(row);
    });
}

showTable(dataBooks);

button1.addEventListener("click", () => {
    dataBooks.sort((b1, b2) => b1.title.localeCompare(b2.title));
    showTable(dataBooks);
});

button2.addEventListener("click", () => {
    dataBooks.sort((b1, b2) => b1.published.localeCompare(b2.published));
    showTable(dataBooks);
});

button3.addEventListener("click", () => {
    let booksISBN = dataBooks.filter(book => book.pages > 300)
        .map(book => book.ISBN);

    booksISBN.forEach(b => document.querySelector(`tr[data-isbn = "${b}"]`)
        .style.backgroundColor = "lightyellow");
});

buttonReset.addEventListener("click", () => {
    dataBooks.map(b => b.ISBN)
        .forEach(b => document.querySelector(`tr[data-isbn = "${b}"]`)
            .style.backgroundColor = "white");
});