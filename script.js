let myLibrary = [];

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
    
    const newBook = new Book(title.value, author.value,
        pages.value, read.value);
        
    addBookToLibrary(newBook);
        
    form_tile.style.display = "none";
    form.reset();
    
    return;
});

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