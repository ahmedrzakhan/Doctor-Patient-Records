const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { registerUser, loginUser } = require("./../controllers/user-controller");

router.use("/register-user", [body("email").isEmail()], registerUser);
router.use("/login-user", [body("email").isEmail()], loginUser);

module.exports = router;
