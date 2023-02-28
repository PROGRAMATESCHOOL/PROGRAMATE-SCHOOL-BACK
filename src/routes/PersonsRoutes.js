const express = require("express");
const LoginController = require("../controllers/LoginController");
const GetAllPersonsController = require("../controllers/GetAllPersonsController");

const FormAnnouncement = require("../controllers/FormAnnouncement");

const router = express.Router();

router
    .get("/persons", GetAllPersonsController.getAllPersons)
    .post("/login", LoginController.loginPerson)
    
    .post("/formScore", FormAnnouncement.scoreForm)

module.exports = router;