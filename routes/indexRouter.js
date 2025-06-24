const { Router } = require("express");
const indexRouter = Router();
const { getAllBooks, getAllBooksWithGenre } = require("../controllers/indexController");

indexRouter.get("/", getAllBooksWithGenre);

module.exports = indexRouter;