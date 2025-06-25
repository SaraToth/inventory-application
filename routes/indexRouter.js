const { Router } = require("express");
const indexRouter = Router();
const { getHome, getByTitles, getByAuthors, getByBranches, getByGenres, getBranchForm } = require("../controllers/indexController");

indexRouter.get("/title", getByTitles);
indexRouter.get("/author", getByAuthors);
indexRouter.get("/branch/new", getBranchForm)
indexRouter.get("/branch", getByBranches);
indexRouter.get("/genre", getByGenres);
indexRouter.get("/", getHome);

module.exports = indexRouter;
