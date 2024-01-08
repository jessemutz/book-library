//* DOM Finders to make code more readable
const getByID = (id) => document.getElementById(id);
const getByClass = (className) => document.getElementsByClassName(className);
const getByTags = (tag) => document.getElementsByTagName(tag);

// User Interface
const btnAddBook = getByID('js-btn--add-book');

// Variables
const myLibrary = []

function Book() {
  // Book constructor
}

function addBookToLibrary() {
  // Do stuff
}