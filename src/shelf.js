function shelfBook(book, shelf) {
    if (shelf.length < 3) {
      shelf.unshift(book); 
    }
  }



  
function unshelfBook(title, shelf) {
  function getBookTitles(book) {
    return book.title === title;
  }
  var removeBook = shelf.findIndex(getBookTitles);
  if (removeBook !== -1) {
    shelf.splice(removeBook, 1);
  }
  }
  
function listTitles(books) {
  function giveTitles(book) {
    return book.title;
  }
  var titles = books.map(giveTitles);
  return titles.join(', ')
}

function searchShelf(shelf, title) {
  function maybeOnShelf(book) {
    return book.title === title ;
  }
  var isOnShelf = shelf.findIndex(maybeOnShelf);
  if (isOnShelf !== -1) {
    return true;
  }
  else {
    return false;
  }
}



module.exports = {
   shelfBook,
   unshelfBook,
   listTitles,
   searchShelf
};