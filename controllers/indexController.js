const bookQueries = require("../db/queries/books");
const genreQueries = require("../db/queries/genres");
const branchQueries = require("../db/queries/branches");
const inventoryQueries = require("../db/queries/inventory");
const asyncHandler = require("express-async-handler");

const getAllBooks = asyncHandler(async (req, res) => {
    const books = await bookQueries.getAllBooks();
    if (!books) {
        res.send("No books in stores");
        return;
    }

    res.render("home", { books: books});
});

module.exports = { getAllBooks };