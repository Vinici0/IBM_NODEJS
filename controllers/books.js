const books = require("../database/db.js");

//1. Complete the code for getting the list of books available in the shop under
const getBooks = (req, res) => {
  res.json(books);
};

// Task 2: Get the books based on ISBN. Upload the task 2 screenshot:
const getBookByISBN = (req, res) => {
  const isbn = req.params.isbn;
  const book = books[isbn];
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
};

// Task 3: Get the books based on author. Upload the task 3 screenshot:
const getBookByAuthor = (req, res) => {
  // let books = {
  //     1: {"author": "Chinua Achebe","title": "Things Fall Apart", "reviews": {} },
  const author = req.params.author;
  const data = {};
  for (let key in books) {
    if (books[key].author === author) {
      data[key] = books[key];
    }
  }
  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
};

// Task 4: Get the books based on title. Upload the task 4 screenshot:
const getBookByTitle = (req, res) => {
  const title = req.params.title;
  const data = {};
  for (let key in books) {
    if (books[key].title === title) {
      data[key] = books[key];
    }
  }
  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
};

// Task 5:  Get a book review. Upload the task 5 screenshot:
const getBookReview = (req, res) => {
  const isbn = req.params.isbn;
  const book = books[isbn];
  if (book) {
    res.json(book.reviews);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
};

// Task 6: Add a new book. Upload the task 6 screenshot:
const addBook = (req, res) => {
  const isbn = req.params.isbn;
  const book = books[isbn];
  if (book) {
    res.status(409).json({ message: "User already exists" });
  } else {
    books[isbn] = req.body;
    res.json({ message: "Book added successfully" });
  }
};

// Login as a registered user. Upload the task 7 screenshot:
const login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(username, password);
  if (username === "admin" && password === "admin") {
    res.json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};

// Task 8: Add/modify a book review. Upload the task 8 screenshot:
const addBookReview = (req, res) => {
    const isbn = req.params.isbn;
    const book = books[isbn];
    if (book) {
        const review = req.body;
        book.reviews.push(review);
        res.json({ message: "Review added successfully" });
    } else {
        res.status(404).json({ message: "Book not found" });
    }
};

// Task 9: Delete a book. Upload the task 9 screenshot:
const deleteBook = (req, res) => {
  const isbn = req.params.isbn;
  const book = books[isbn];
  if (book) {
    delete books[isbn];
    res.json({ message: "Book deleted successfully" });
  } else {
    res.status(404).json({ message: "Book not found" });
  }
};

//10: Get all books – Using async callback function
const getBooksAsync = (req, res) => {
  res.json(books);
};

//Task 11: Search by ISBN
const getBookByISBNAsync = (req, res) => {
  const isbn = req.params.isbn;
  const book = books[isbn];
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
};

//Task 12: Search by author
const getBookByAuthorAsync = (req, res) => {
  const author = req.params.author;
    const data = {};
    for (let key in books) {
        if (books[key].author === author) {
            data[key] = books[key];
        }
    }
    if (data) {
        res.json(data);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
};

//Task 13: Search by title
const getBookByTitleAsync = (req, res) => {
  const title = req.params.title;
  const book = books[title];
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
};

module.exports = {
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
};
