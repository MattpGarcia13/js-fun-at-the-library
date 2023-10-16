
function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  };
  return library;
}

function addBook(library, book) {
  var genre = book.genre;
  library.shelves[genre].push(book);
}

function checkoutBook(library, bookTitle, genre) {
  var genreShelf = library.shelves[genre];
  var index = genreShelf.findIndex(book => book.title === bookTitle);

  if (index !== -1) {
    var checkedOutBook = genreShelf.splice(index, 1)[0];
    library.shelves[genre] = genreShelf;
    return 'You have now checked out '+bookTitle+' from the '+library.name+'.';
  } else {
    return 'Sorry, there are currently no copies of '+bookTitle+' available at the '+library.name+'.';
  }
}

function takeStock(library, genre) {

  if (genre !== undefined) {
    var bookNum = library.shelves[genre].length;
    return 'There are a total of '+bookNum+' '+genre+' books at the '+library.name+'.';
  }
  else {
    var totalBooks = 0;
    for (i in library.shelves) {
      totalBooks = totalBooks + library.shelves[i].length;
    } 
  return 'There are a total of '+totalBooks+' books at the '+library.name+'.'
  }
}


module.exports = {
   createLibrary,
   addBook,
   checkoutBook,
   takeStock
};