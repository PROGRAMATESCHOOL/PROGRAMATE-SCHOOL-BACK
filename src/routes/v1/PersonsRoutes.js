const express = require("express");
const LoginController = require("../../controllers/LoginController");
const GetAllPersonsController = require("../../controllers/GetAllPersonsController");
const SignUp = require("../../controllers/RegisterController")
const ScoreAnnouncement = require("../../controllers/HandleDataController");

const router = express.Router();

//This is an inicial version of the router, might change due to Functionality & new features

router
    .get("/persons", GetAllPersonsController.getAllPersons) //Custom route used to get all persons
    .post("/login", LoginController.loginPerson) //Custom route for Log In 
    .post("/SignUp", SignUp.SignUp) //Custom route for SignUp
    .post("/ScoreAnnouncement", ScoreAnnouncement.scoreForm) //Custom route for Scores of Announcements

module.exports = router;