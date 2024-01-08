//* DOM Finders to make code more readable
const getByID = (id) => document.getElementById(id);
const getByClass = (className) => document.getElementsByClassName(className);
const getByTags = (tag) => document.getElementsByTagName(tag);

// User Interface
const btnBookAdd = getByID('js-btnBookAdd');

// Variables
const myLibrary = []

class Book {
  constructor(
    title = 'Unknown',
    author = 'Unknown',
    pages = '0',
    isRead = false
  ) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
  }
}

function deleteBook() {
  // Remove a book
}

function toggleReadStatus() {
  // Toggle read
}

function addBookToLibrary() {
  // Do stuff
}
