const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "Author name is required!"],
        minLength: [3, "Name must be atleast 3 characters!"]
    }

}, {timestamps: true});

//Register our new collection (Scheme)

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;