const myLibrary = [];
const bookList = document.querySelector('#book-list');
const bookFeat = document.querySelector('#book-feat');
const featInfoAuthor = document.querySelector('.featinfo h4');
const featInfoTitle = document.querySelector('.featinfo h3');
const featInfoBtnStatus = document.querySelector('.featinfo button');
const buttonAddBook = document.querySelector('button#addbook');
const addFormSec = document.querySelector('#add-form');
const buttonFormClose = document.querySelector('.close-form');
const buttonConfirmBook = document.querySelector('#confirm-book');
const formAddBook = document.getElementById('frm-add');


function Book(title, author, pagesNo, isRead) {
  this.title = title;
  this.author = author;
  this.pagesNo = pagesNo;
  this.isRead = isRead;
}

Book.prototype.info = function() {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}

//add dummy content
const newBoook1 = new Book('1 Warren Book Part III', 'Warren P. Abayon', 1250, 'Yes');
const newBoook2 = new Book('2 Warren Book Part III', 'Warren P. Abayon', 12500, 'Yes');
const newBoook3 = new Book('3 Warren Book Part III', 'Warren P. Abayon', 150, 'Yes');




//object constructor new object ot array
myLibrary.push(newBoook1);
myLibrary.push(newBoook2);


//show books array in the cards
showBooks(myLibrary);
showFeatBook(myLibrary);



//loops array to display the books
function showBooks(bookArr) {
  
  if(bookList.innerHTML) {//clear
    bookList.innerHTML="";
  }

  bookArr.forEach((val,index, arr) => {
    //create the elements
    const bookItems = document.createElement('article');
    const bookCover = document.createElement('div');
    const bookDetails = document.createElement('div');
    const bookTitle = document.createElement('h3');
    const bookAuthor = document.createElement('h4');
    const bookRow = document.createElement('div');
    const bookRowColLeft = document.createElement('div');
    const bookRowColRight = document.createElement('div');
    const bookBtnStatus = document.createElement('button');
    const bookPagesNo = document.createElement('p');
  
    //set the element value
    bookTitle.innerHTML = `<a href="">${val.title}</a>`;
    bookAuthor.innerHTML = val.author;
    bookBtnStatus.innerHTML = `<span>${val.isRead}</span> <span class="btnicon"><svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.5 7H7.5M7.5 7H13.5M7.5 7V13M7.5 7V1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                        
                                        </span>`;
    bookPagesNo.innerHTML = `${val.pagesNo} Pages`;
  
    //add classes
    bookItems.classList.add('bookitem');
    bookCover.classList.add('bookcover')
    bookDetails.classList.add('bookdetails');
    bookTitle.classList.add('title');
    bookRow.classList.add("row", "dflex", 'align-fl-cen', 'just-con-sp-bet');
    bookRowColLeft.classList.add('col');
    bookRowColRight.classList.add('col');
    bookBtnStatus.setAttribute('id', 'isread');
    bookBtnStatus.classList.add('regularbtn', 'small');
  
    //add the elemenent //show
    bookList.appendChild(bookItems);
    bookItems.appendChild(bookCover)
    bookItems.appendChild(bookDetails);
    bookDetails.appendChild(bookTitle);
    bookDetails.appendChild(bookAuthor);
    bookDetails.appendChild(bookRow);
    bookRow.appendChild(bookRowColLeft);
    bookRowColLeft.appendChild(bookBtnStatus);
    bookRow.appendChild(bookRowColRight);
    bookRowColRight.appendChild(bookPagesNo)
    
  }); 


}

//show featured book
function showFeatBook(bookArr) {
      /// show Featured Book
      bookArr.filter((val,index,arr) => {
        if(index === 0) {
          featInfoAuthor.innerHTML = val.author;
          featInfoTitle.innerHTML = `<a href=""> ${val.title} </a>`;
          featInfoBtnStatus.innerHTML = val.isRead;
    
        }
      });
}


//form pop up acctions
buttonAddBook.addEventListener('click', () => {
  addFormSec.style.display = "block";
  const bookTitle = document.getElementById('book-title');//focus the title input on load
  bookTitle.focus();
});

buttonFormClose.addEventListener('click', () => {
  addFormSec.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == addFormSec) {
    addFormSec.style.display = "none";
  }
}

// buttonConfirmBook.addEventListener('click', (e) => {
//   e.preventDefault()//prevent the submit of fake form;
//   console.log('book added');
// })

formAddBook.addEventListener('submit', (e) => {
  e.preventDefault()//prevent the submit of fake form;
 
  addBookToLibrary();

});




function addBookToLibrary() {
  const bookTitle = document.getElementById('book-title');
  const bookAuthor = document.getElementById('book-author');
  const bookNoPages = document.getElementById('book-pages-no');
  const isRead = document.getElementById('is-read');


  const newBook = new Book(
                          bookTitle.value,
                          bookAuthor.value,
                          bookNoPages.value,
                          isBookRead(),
                          );

  //convert book read status
  function isBookRead() {
    if(isRead.checked === true) {
      return 'Continue';
    } else {
      return 'Read Now';
    }
  }
  


  myLibrary.push(newBook);
  showBooks(myLibrary);

  formAddBook.reset();//resets the form fields
 
}

