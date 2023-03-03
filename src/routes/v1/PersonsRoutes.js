const express = require("express");
const LoginController = require("../../controllers/LoginController");
const GetAllPersonsController = require("../../controllers/GetAllPersonsController");
const SignUp = require ("../../controllers/RegisterController");
const NewAdmin = require('../../controllers/NewAdminController');
const StudentListController = require("../../controllers/StudentListController")
const ScoreAnnouncement = require("../../controllers/HandleDataController");

const router = express.Router();

//This is an inicial version of the router, might change due to Functionality & new features

router
    .get("/persons", GetAllPersonsController.getAllPersons) //Custom route used to get all persons
    
    .get("/getUsers", StudentListController.getAllStudents)//Custom route used to get all students
    //.get("/getAdmins", //Insert controller here)
    .post("/login", LoginController.loginPerson) //Custom route for Log In 

    .post("/signUp", SignUp.SignUp) //Custom route for SignUp
    .post("/newAdmin", NewAdmin.NewAdmin)

    .post("/SignUp", SignUp.SignUp) //Custom route for SignUp
    .post("/scoreannouncement", ScoreAnnouncement.scoreForm);


module.exports = router;