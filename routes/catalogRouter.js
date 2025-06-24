const { Router } = require("express");
const catalogRouter = Router();

catalogRouter.get("/title", (req, res) => {
    res.send("Display books by title");
});

catalogRouter.get("/author", (req, res) => {
    res.send("Display books by author");
});

module.exports = catalogRouter;