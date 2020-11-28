const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    
    ID: {
        type: String,
        required: true,
        unique: true
    },
    img: {
        type: String,
        required: true
    },
    authors: {
        type: String,
        required: true
    },
    desc: {
        type: String,
    },
   
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;