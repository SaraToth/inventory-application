const bookQueries = require("../db/queries/books");
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
    const { rows, columns } = await bookQueries.getBranches();
    // list of branches -> user clicks one
    res.render("branches", { catalogTitle: "Books by Branch", rows, columns});
});

const getByGenres = asyncHandler(async (req, res) => {
    const { rows, columns } = await bookQueries.getGenres();
    // list of genres -> user clicks one
    res.render("genres", { catalogTitle: "Books by Genre", rows, columns});
});

const getBranchForm = (req, res) => {
    res.render("branchForm");
};

module.exports = { getHome, getByTitles, getByAuthors, getByBranches, getByGenres, getBranchForm };