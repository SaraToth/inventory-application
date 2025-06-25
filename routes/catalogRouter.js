const { Router } = require("express");
const catalogRouter = Router();
const { getByTitles, getByAuthors, getByBranches, getByGenres } = require("../controllers/catalogController");


catalogRouter.get("/title", getByTitles);

catalogRouter.get("/author", getByAuthors);

catalogRouter.get("/branch", getByBranches);

catalogRouter.get("/genre", getByGenres);

module.exports = catalogRouter;