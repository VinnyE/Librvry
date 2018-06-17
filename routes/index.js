const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

router.get("/", () => res.json({ success: "index route" }));

router.post("/api/register", userController.register);

router.post("/api/login", authController.logIn);
router.post("/api/logout", authController.logOut);

module.exports = router;
