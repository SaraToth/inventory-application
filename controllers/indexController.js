const bookQueries = require("../db/queries/books");
const genreQueries = require("../db/queries/genres");
const branchQueries = require("../db/queries/branches");
const inventoryQueries = require("../db/queries/inventory");
const asyncHandler = require("express-async-handler");

const getHome = (req, res) => {
    res.render("home");
};

const getByTitles = asyncHandler(async (req, res) => {
    const { rows, columns } = await bookQueries.getBooks();
    res.render("titles", { catalogTitle: "Books by Title", columns, rows});
});

const getByAuthors = asyncHandler(async (req, res) => {
    const { rows, columns} = await bookQueries.getBooks();
    res.render("authors", { catalogTitle: "Books by Author", columns, rows});
});

const getByBranches = asyncHandler(async (req, res) => {
    const { rows, columns } = await branchQueries.getBranches();
    // list of branches -> user clicks one
    res.render("branches", { catalogTitle: "Books by Branch", rows, columns});
});

const getByGenres = asyncHandler(async (req, res) => {
    const { rows, columns } = await genreQueries.getGenres();
    // list of genres -> user clicks one
    res.render("genres", { catalogTitle: "Books by Genre", rows, columns});
});


module.exports = { getHome, getByTitles, getByAuthors, getByBranches, getByGenres };