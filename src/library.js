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

// Use this instead of a myLibrary array
class Library {
  constructor() {
    this.books = []
  }
}

function deleteBook() {
  // Remove a book
}

function toggleReadStatus() {
  // Toggle read
}

const newBookFromForm = () => {
  let title = getByID("js-title").value
  let author = getByID("js-author").value
  let pages = getByID("js-pages").value
  let isRead = getByID("js-isRead").checked

  return new Book(title, author, pages, isRead)
}

function addBookToLibrary(e) {
  e.preventDefault()
  // Do stuff
  const newBook = newBookFromForm()

  myLibrary.push(newBook)
}

function displayLibrary() {
  // create the books
  const bookCard = document.createElement('div')
  const title = document.createElement('p')
  const author = document.createElement('p')
  const pages = document.createElement('p')
  const buttonGroup = document.createElement('div')
  const readBtn = document.createElement('button')
  const removeBtn = document.createElement('button')

  bookCard.classList.add('book-card')
  buttonGroup.classList.add('button-group')
  readBtn.classList.add('btn')
  removeBtn.classList.add('btn')
  readBtn.onclick = toggleReadStatus
  removeBtn.onclick = deleteBook
}


btnBookAdd.addEventListener('click', addBookToLibrary)
