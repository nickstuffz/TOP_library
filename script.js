let myLibrary = [];

let books_grid = document.getElementById("books-grid");
let new_book = document.getElementById("new-book-btn");
let form_tile = document.getElementById("form-tile");
let form = document.getElementById("form");
let close = document.getElementById("close-btn");


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
    
    let newBook = new Book(title.value, author.value,
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
    myLibrary.forEach((book, index) => {
        let newTile = document.createElement("div");
        newTile.className = "tile book-tile";

        let newTitle = document.createElement("h2");
        newTitle.innerHTML = book.title;

        let newAuthor = document.createElement("h3");
        newAuthor.innerHTML = "by " + book.author;

        let newPages = document.createElement("h4");
        newPages.innerHTML = book.pages + " pages";

        let newRead = document.createElement("button");
        if (book.read === "yes") {
            newRead.innerHTML = "already read";
            newRead.className = "read-btn";
            newTile.classList.add("read");
        }
        else {
            newRead.innerHTML = "not yet read";
            newRead.className = "unread-btn";
            newTile.classList.add("unread");
        }
        newRead.addEventListener('click', () => {
            if (book.read === "yes") {
                book.read = "no";
            }
            else {
                book.read = "yes";
            }
            displayBooks();
            console.log(myLibrary);
            return;
        });

        let remove_button = document.createElement("button");
        remove_button.className = "remove-btn";
        remove_button.innerHTML = "remove";
        remove_button.addEventListener('click', () => {
            myLibrary.splice(index, 1);
            displayBooks();
        });

        books_grid.appendChild(newTile)
        .append(newTitle, newAuthor, newPages, newRead, remove_button);
        
        return;
     
    });

}

// setup form validation


