let myLibrary = [];

const books_grid = document.getElementById("books-grid");
const new_book = document.getElementById("new-book-btn");
const form_tile = document.getElementById("form-tile");
const form = document.getElementById("form");
const close = document.getElementById("close-btn");


new_book.addEventListener('click', () => {
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
    let title = document.getElementById("title-form");
    let author = document.getElementById("author-form");
    let pages = document.getElementById("pages-form");
    let read = document.querySelector("input[name='read']:checked");
    
    const newBook = new Book(title.value, author.value,
        pages.value, read.value);
        
    addBookToLibrary(newBook);

    displayBooks();
        
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

function displayBooks() {
    let book_tiles = document.getElementsByClassName("book-tile");
    while (book_tiles[0]) {
        book_tiles[0].parentNode.removeChild(book_tiles[0]);
    }
    myLibrary.forEach((book) => {
        const newTile = document.createElement("div");
        newTile.setAttribute("class", "tile book-tile");
        newTile.innerHTML = book.title;
        books_grid.appendChild(newTile);

    });

}