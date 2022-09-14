const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: [true, "title is required!"],
        minLength: [2, "Title must be atleast 2 characters!"]
    },

    price: {
        type: Number,
        required: [true, "Price is required!"],
        minLength: [.01, "Price must be more than zero"]
    },

    description: {
        type: String,
        required: [true, "A product description is required!"],
        minLength: [3, "Description must be atleast 3 characters!"]
    }

});

//Register our new collection (Scheme)

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;