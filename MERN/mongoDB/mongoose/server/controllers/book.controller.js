const Book = require("../models/book.model");

module.exports.findAllBooks = (req, res) => {
  Book.find()
    .then(allDaBooks => res.json({ books: allDaBooks }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleBook = (req, res) => {
	Book.findOne({ _id: req.params.id })
		.then(oneSingleBook => res.json({ book: oneSingleBook }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewBook = (req, res) => {
  Book.create(req.body)
    .then(newlyCreatedBook => res.json({ book: newlyCreatedBook }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingBook = (req, res) => {
  Book.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedBook => res.json({ book: updatedBook }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingBook = (req, res) => {
  Book.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
