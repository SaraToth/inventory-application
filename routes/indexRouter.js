const { Router } = require("express");
const indexRouter = Router();
const { getAllBooks } = require("../controllers/indexController");

indexRouter.get("/", getAllBooks);

module.exports = indexRouter;