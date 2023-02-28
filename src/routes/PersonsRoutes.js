const express = require("express");
const LoginController = require("../controllers/LoginController");
const GetAllPersonsController = require("../controllers/GetAllPersonsController");
const SingUp = require ("../controllers/RegisterController");

const router = express.Router();

router
    .get("/persons", GetAllPersonsController.getAllPersons)
    .post("/login", LoginController.loginPerson)
    .post("/singup", SingUp.singUp)

module.exports = router;