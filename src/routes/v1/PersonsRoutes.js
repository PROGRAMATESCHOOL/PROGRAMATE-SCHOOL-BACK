const express = require("express");
const LoginController = require("../../controllers/LoginController");
const GetAllPersonsController = require("../../controllers/GetAllPersonsController");

const router = express.Router();

//This is an inicial version of the router, might change due to Functionality & new features

router
    .get("/persons", GetAllPersonsController.getAllPersons) //Custom route used to get all persons
    .post("/login", LoginController.loginPerson) //Custom route for Log In 

module.exports = router;