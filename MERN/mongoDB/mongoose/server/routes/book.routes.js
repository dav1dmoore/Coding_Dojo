const BookController = require("../controllers/book.controller");

module.exports = app => {
  app.get("/api/books/", BookController.findAllBooks);
  app.get("/api/books/:id", BookController.findOneSingleBook);
  app.put("/api/books/update/:id", BookController.updateExistingBook);
  app.post("/api/books/new", BookController.createNewBook);
  app.delete("/api/books/delete/:id", BookController.deleteAnExistingBook);
};