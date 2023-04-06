
const { Router } = require("express");
//constroler books
const {
  getBooks,
  getBookByISBN,
  getBookByAuthor,
  getBookByTitle,
  getBookReview,
  addBook,
  login,
  addBookReview,
  deleteBook,
  getBooksAsync,
  getBookByISBNAsync,
  getBookByAuthorAsync,
  getBookByTitleAsync,
} = require("../controllers/books.js");


const router = Router();

//Task 1: Get all books
router.get("/", getBooks);

//Task 2: Search by ISBN
router.get("/isbn/:isbn", getBookByISBN);

//Task 3: Search by author
router.get("/author/:author", getBookByAuthor);

//Task 4: Search by title
router.get("/title/:title", getBookByTitle);

//Task 5: Get book review
router.get("/review/:isbn", getBookReview);

//Task 6: Add a new book
router.post("/add", addBook);


//Task 7: Login
router.post("/login", login);

//Task 8: Add a new book review
router.put("/review", addBookReview);

//Task 9: Delete a book
router.delete("/delete/:isbn", deleteBook);

//10: Get all books – Using async callback function
router.get("/async", getBooksAsync);    

//Task 11: Search by ISBN
router.get("/async/isbn/:isbn", getBookByISBNAsync);

//Task 12: Search by author
router.get("/async/author/:author", getBookByAuthorAsync);


//Task 13: Search by title
router.get("/async/title/:title", getBookByTitleAsync);

module.exports = router;

