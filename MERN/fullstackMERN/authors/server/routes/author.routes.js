//import controller
const authorController = require("../controllers/author.controller")

// Define Routes
module.exports = app => {

    //create new author app.route
    app.post("/api/author/new", authorController.createAuthor)

    //Read (display) all authors app get
    app.get("/api/authors", authorController.findAllAuthors)

    //Read display one author app.get
    app.get("/api/author/:id", authorController.displayAuthor)

    //Update an author app.put
    app.put("/api/author/update/:id", authorController.updateAuthor)

    //Delete Destroy a author
    app.delete("/api/author/delete/:id", authorController.deleteAuthor)
}