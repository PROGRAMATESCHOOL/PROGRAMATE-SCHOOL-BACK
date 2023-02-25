const express = require("express");
const LoginController = require("../controllers/LoginController");
const GetAllPersonsController = require("../controllers/GetAllPersonsController");

const router = express.Router();

router
    .get("/persons", GetAllPersonsController.getAllPersons)
    .post("/login", LoginController.loginPerson)

module.exports = router;