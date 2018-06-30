const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const booksController = require("../controllers/booksController");

router.get("/", () => res.json({ success: "index route" }));

router.post("/api/register", userController.register);

router.post("/api/login", authController.logIn);
router.post("/api/logout", authController.logOut);

router.post("/api/books/search", booksController.search);

module.exports = router;
