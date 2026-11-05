"use strict";

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = false;
  }

  issueBook() {
    if (this.isIssued) return false;
    this.isIssued = true;
    return true;
  }

  returnBook() {
    this.isIssued = false;
  }
}

const books = [
  new Book("Atomic Habits", "James Clear", "9780735211292"),
  new Book("Clean Code", "Robert C. Martin", "9780132350884"),
  new Book("The Alchemist", "Paulo Coelho", "9780061122415")
];

function issueByIsbn(isbn) {
  const book = books.find((item) => item.isbn === isbn);
  if (!book) return console.log("Book not found.");
  console.log(book.issueBook() ? `${book.title} has been issued.` : `${book.title} is already issued.`);
}

issueByIsbn("9780132350884");
console.log("Available books:");
books.filter((book) => !book.isIssued).forEach((book) => console.log(`${book.title} by ${book.author}`));
