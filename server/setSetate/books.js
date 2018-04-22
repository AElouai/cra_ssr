import express from "express";
const router = express.Router();
import { getBooks } from "../../src/rest";

router.get("/", function(req, res, next) {
  getBooks().then(data => {
    req.reduxState.books.lists = data;
    next();
  });
});

router.get("/:id", function(req, res, next) {
  getBook().then(data => {
    req.reduxState.books.lists = data;
    next();
  });
});

export default router;
