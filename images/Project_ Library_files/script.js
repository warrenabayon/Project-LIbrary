




const newBook = new Book('The Hobbit', 'J.R.R Tolkien', 295, 'not read yet');
const newBook1 = new Book('The Hobbit 1', 'J.R.R Tolkien', 295, 'not read yet');
const newBook2 = new Book('The Hobbit 2', 'J.R.R Tolkien', 295, 'not read yet');




// use constructor for books
//button click , pop-up for show or,, slide right window with form
//form will have... title field, author field,, pages,, is read mode,
// is read can be toggled to read and not yet read
// item will have delete button or maybe update

//book created will be added in array


const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function() {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}

function addBookToLibrary() {

  myLibrary.push(newBook)//add the book

  console.table(myLibrary);

  //display the books in the array
  
}

const btnBookAdd = document.querySelector('#addBook');//add button
btnBookAdd.addEventListener('click', addBookToLibrary);






myLibrary.push(newBook);
myLibrary.push(newBook1)
myLibrary.push(newBook2)

function showBooks(library) {
    // console.table(library);

    //create a list
    const bookList = document.querySelector('#bookList')

    library.forEach((val,index, arr) => {
      const bookItem = document.createElement('li');
      bookItem.innerHTML =`<h2> ${val.title} </h2> 
                          <button id ="delete">Delete</button>`;
                          
      
      
                          
      bookList.appendChild(bookItem); 
      
    });

    
     
}



function deleteBook() {
   const btnDelete = document.querySelector('#delete');
   btnDelete.addEventListener('click', () => {
    console.log('del')
   })
}



showBooks(myLibrary);