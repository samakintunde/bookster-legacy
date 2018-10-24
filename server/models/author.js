const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: {
    type: String,
    required: "Name can not be blank"
  },
  age: {
    type: String
  }
});

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;
