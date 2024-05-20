const myLibrary = [];
const bookList = document.querySelector('#book-list');
const bookFeat = document.querySelector('#book-feat');
const featInfo = document.querySelector('.featinfo');
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
  return `${this.title} by ${this.author}, ${this.pagesNo} pages, ${this.isRead}`;
}

//add dummy content
const newBoook1 = new Book('1 Warren Book Part III', 'Warren P. Abayon', 1250, 'Continue');
const newBoook2 = new Book('2 Warren Book Part III', 'Warren P. Abayon', 12500, 'Read Now');





//object constructor new object ot array
myLibrary.push(newBoook1);
myLibrary.push(newBoook2);


//show books array in the cards
showBooks(myLibrary);
showFeatBook(myLibrary);




function showFeatBook() { //show featured book
      myLibrary.filter((val,index,arr) => {
        if(index === 0) {
          featInfoAuthor.innerHTML = val.author;
          featInfoTitle.innerHTML = `<a href=""> ${val.title} </a>`;
          featInfoBtnStatus.innerHTML = val.isRead;

        }
      });
      
      if (myLibrary.length === 0) {///hide if empty
        bookFeat.style.display = 'none';
      } else {
        bookFeat.style.display = 'flex';
      }
  
};


function changeButtonReadStatus() {

  if(myLibrary[0].isRead.includes('Read')) {//check the value if book read status
    myLibrary[0].isRead = 'Continue';
  } else {
    myLibrary[0].isRead = 'Read Now';
  }
  //reload
  showBooks(myLibrary);
  showFeatBook(myLibrary);
}

featInfoBtnStatus.addEventListener('click', changeButtonReadStatus);

function showBooks(bookArr) {//loops array to display the books
  
  if(bookList.innerHTML) {//clear
    bookList.innerHTML="";
  }
  bookArr.forEach((val,index, arr) => { //create the elements
   
    const bookItems = document.createElement('article');
    const bookCover = document.createElement('div');
    const bookBtnDelete = document.createElement('button');
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
    bookBtnDelete.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 10V17M10 10V17M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20" stroke="#D3C8B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `;
  
    //add classes
    bookItems.classList.add('bookitem');
    bookCover.classList.add('bookcover', 'dflex');
    bookPagesNo.classList.add('bookpagesno')
    bookBtnDelete.classList.add('bookDelete');
    bookDetails.classList.add('bookdetails');
    bookTitle.classList.add('title');
    bookRow.classList.add("row", "dflex", 'align-fl-cen', 'just-con-sp-bet');
    bookRowColLeft.classList.add('col');
    bookRowColRight.classList.add('col');
    bookBtnStatus.classList.add('isread');
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
    bookCover.appendChild(bookPagesNo)
    bookRowColRight.appendChild(bookBtnDelete);



    function changeReadStatus() {
      if(val.isRead.includes('Read')) {//check the value if book read status
        val.isRead = 'Continue';
      } else {
        val.isRead = 'Read Now';
      }
      //reload
      showBooks(myLibrary);
      showFeatBook(myLibrary);
    }

    //delete book item
    function deleteBookItem() {
      if(confirm(`Delete ${val.title}`) === true) {//confirmation of deletion
        myLibrary.splice(index,1);//delete
      } 

      showBooks(myLibrary);
      showFeatBook(myLibrary);
    }

    
    //change status of read to continue
    bookBtnStatus.addEventListener('click',changeReadStatus);
    //delete book item
    bookBtnDelete.addEventListener('click', deleteBookItem);

  }); 


};//end show



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
  showFeatBook(myLibrary);
  
  formAddBook.reset();//resets the form fields
 
}

