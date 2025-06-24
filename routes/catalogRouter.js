const { Router } = require("express");
const catalogRouter = Router();

catalogRouter.get("/title", (req, res) => {
    res.render("catalog", { catalogTitle: "Books by Title"});
});

catalogRouter.get("/author", (req, res) => {
    res.render("catalog", { catalogTitle: "Books by Author"});
});

catalogRouter.get("/branch", (req, res) => {
    res.render("catalog", { catalogTitle: "Books by Branch"});
});

catalogRouter.get("/genre", (req, res) => {
    res.render("catalog", { catalogTitle: "Books by Genre"});
});

module.exports = catalogRouter;