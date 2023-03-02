const router = require('express').Router();
const LoginController = require("../../controllers/LoginController");
const GetAllPersonsController = require("../../controllers/GetAllPersonsController");
const RegisterController =require ('../../controllers/RegisterController');
const NewAdmin = require('../../controllers/NewAdminController')
const ScoreAnnouncement = require("../../controllers/HandleDataController");



//This is an inicial version of the router, might change due to Functionality & new features

router
    .get("/persons", GetAllPersonsController.getAllPersons)//Custom route used to get all persons
    
    //.get("/getUsers", //Insert controller here)
    //.get("/getAdmins", //Insert controller here)
    .post("/login", LoginController.loginPerson) //Custom route for Log In 

    .post("/signUp", SignUp.SignUp) //Custom route for SignUp
    .post("/newAdmin", NewAdmin.NewAdmin)

    .post("/SignUp", [],RegisterController.SignUp) //Custom route for SignUp
    .post("/scoreannouncement", ScoreAnnouncement.scoreForm);

    // .get("/confirm/:token", [], RegisterController.confirm)

module.exports = router;