const inputs = document.querySelectorAll("input");
const submitBtn = document.querySelector("#submitBtn");

//array filled with library books
const library = [];

//constructor function for new Book Objects
function Book(title, author, genre, pages, read) {
  this.title = title ?? "Title not provided";
  this.author = author ?? "Author not provided";
  this.genre = genre ?? "Genre not provided";
  this.pages = pages ?? "Page count not provided";
  this.read = read;
}

//function prompting for library books from user
function addBookToLibrary() {
  let book = new Book(undefined, undefined, undefined, undefined, undefined);
  inputs.forEach((input) => {
    switch (input) {
      case input.name == title:
        book.title = input.value;
        break;
    }
  });
  return library.push(book);
}
console.log(library.length);
