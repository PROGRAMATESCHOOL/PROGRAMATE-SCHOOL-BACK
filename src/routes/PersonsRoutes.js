const express = require("express");
const LoginController = require("../controllers/LoginController");
const GetAllPersonsController = require("../controllers/GetAllPersonsController");

const router = express.Router();

router
    .get("/", GetAllPersonsController.getAllPersons)
    .post("/:personEmail, personPassword", LoginController.loginPerson)

module.exports = router;