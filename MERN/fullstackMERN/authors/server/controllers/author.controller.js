// Method names to be used

const Author = require("../models/author.model");

//1 Create Author

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
    .then((newAuthor) => {res.json({results: newAuthor})})
    .catch(err => res.status(400).json({err: err}))
}

//2 Find all authors

module.exports.findAllAuthors = (req, res) => {
    Author.find()
    .then((allAuthors) => {res.json({results: allAuthors})})
    .catch(err => res.json({err:err}))
} 

//3 display Author

module.exports.displayAuthor = (req, res) => {
    Author.findOne({_id: req.params.id})
    .then((author) => {res.json({results: author})})
    .catch(err => res.json({err:err}))
}

//4 updated Author

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({_id:req.params.id}, req.body, {
        new: true,
        runValidators: true
    })
    .then((updatedAuthor) => {res.json({results: updatedAuthor})})
    .catch(err => res.status(400).json({err: err}))
}

//5 delete Author

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id:req.params.id})
    .then((deletedAuthor) => {res.json({results: deletedAuthor})})
    .catch((err) => {res.json({err:err})})
}