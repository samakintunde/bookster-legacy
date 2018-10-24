const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: "Title can not be blank"
  },
  genre: {
    type: String
  },
  authorId: {
    type: String
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
