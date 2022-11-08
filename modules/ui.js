import Store from './store.js';

export default class UI {
  showBooks = () => {
    const store = new Store();
    const books = store.getBooks();
    books.forEach((book) => this.addBookToList(book));
  }

  addBookToList = (book) => {
    const bookHolder = document.querySelector('.bookDisplay');
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <div class="bookFlex">
    <div class="flexIt">
    <h4 class="">${book.title} &nbsp; &nbsp; &nbsp; by &nbsp; &nbsp; &nbsp; ${book.author}</h4>
    <button class="remove">Remove</button>
    </div>
    </div>
    `;
    newDiv.classList.add('newDiv');
    bookHolder.appendChild(newDiv);
  }

  deleteBook = (el) => {
    if (el.classList.contains('remove')) {
      el.parentElement.parentElement.remove();
    }
  }

  clearFields = () => {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}
