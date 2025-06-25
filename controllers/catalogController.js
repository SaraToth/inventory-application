const bookQueries = require("../db/queries/books");
const genreQueries = require("../db/queries/genres");
const branchQueries = require("../db/queries/branches");
const inventoryQueries = require("../db/queries/inventory");
const asyncHandler = require("express-async-handler");

const getByTitles = asyncHandler(async (req, res) => {
    const { rows, columns } = await bookQueries.getBooks();
    res.render("catalog", { catalogTitle: "Books by Title", columns, rows});
});

const getByAuthors = asyncHandler(async (req, res) => {
    const { rows, columns} = await bookQueries.getBooks();
    res.render("catalog", { catalogTitle: "Books by Author", columns, rows});
});

const getByBranches = asyncHandler(async (req, res) => {
    // list of branches -> user clicks one
    res.render("catalog", { catalogTitle: "Books by Branch"});
});

const getByGenres = asyncHandler(async (req, res) => {
    // list of genres -> user clicks one
    res.render("catalog", { catalogTitle: "Books by Genre"});
});


module.exports = { getByTitles, getByAuthors, getByBranches, getByGenres };