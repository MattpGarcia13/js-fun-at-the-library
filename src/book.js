function createTitle(title) {
  var title = "The " + title;
  return title;
}

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns,
  };
  return character;
}

function saveReview(review, content) {
  if (!content.includes(review)) {
    content.push(review); 
  }
  return content;
}

function calculatePageCount(bookTitle) {
  var titleLength = bookTitle.length;
  var pageCount = titleLength *20;
  return pageCount;
}

function writeBook(title, mainCharacter, genre) {
  var book = {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(title),
    genre: genre,
  };
  return book;
}

function editBook(ghoulBook) {
  ghoulBook.pageCount = ghoulBook.pageCount *.75;
}



module.exports = {
  createTitle,
   buildMainCharacter,
   saveReview,
   calculatePageCount,
   writeBook,
   editBook
}