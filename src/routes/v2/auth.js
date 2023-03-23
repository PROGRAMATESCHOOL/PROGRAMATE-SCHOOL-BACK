const router = require("express").Router();
const LoginController = require("../../controllers/LoginController");
const SignUp = require("../../controllers/RegisterController");

router
  .post("/login", LoginController.loginPerson) //Custom route for Log In
  .post("/signUp", SignUp.SignUp); //Custom route for RegisterController -AP

module.exports = router;