let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    return;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    return;
}


const newBook = document.getElementById("new-book");
const form_tile = document.getElementById("form-tile");
const form = document.getElementById("form");
const close = document.getElementById("close");
const add = document.getElementById("add")


newBook.addEventListener('click', () => {
    form_tile.style.display = "flex";
    return;
});

close.addEventListener('click', (e) => {
    e.preventDefault();
    form_tile.style.display = "none";
    return;
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let title = document.getElementById("form-title");
    let author = document.getElementById("form-author");
    let pages = document.getElementById("form-pages");
    let read = document.querySelector("input[name='read']:checked");

    console.log(title.value);
    console.log(author.value);
    console.log(pages.value);
    console.log(read.value);
    form_tile.style.display = "none";
    form.reset();


    return;
});