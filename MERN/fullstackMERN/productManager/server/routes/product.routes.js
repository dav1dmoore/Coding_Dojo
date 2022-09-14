//import controllerproduct
const productController = require("../controllers/product.controller")

// Define Routes
module.exports = app => {

    //create new product app.route
    app.post("/api/product/new", productController.createProduct)

    //Read (display) all products app get
    app.get("/api/products", productController.findAllProducts)

    //Read display one product app.get
    app.get("/api/product/:id", productController.displayProduct)

    //Update a product app.put
    app.put("/api/product/update/:id", productController.updateProduct)

    //Delete Destroy a product
    app.delete("/api/product/delete/:id", productController.deleteProduct)
}