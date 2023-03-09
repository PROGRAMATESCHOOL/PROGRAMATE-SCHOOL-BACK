const router = require('express').Router();
const LoginController = require("../../controllers/LoginController");
const GetAllPersonsController = require("../../controllers/GetAllPersonsController");
const SignUp =require ('../../controllers/RegisterController');
const NewAdmin = require('../../controllers/NewAdminController')
const AdminListController = require("../../controllers/AdminListController");
const StudentListController = require("../../controllers/StudentListController") 
const ScoreAnnouncement = require("../../controllers/HandleDataController");



//This is an inicial version of the router, might change due to Functionality & new features

router
    .post("/login", LoginController.loginPerson) //Custom route for Log In 
    .post("/signUp", SignUp.SignUp) //Custom route for RegisterController -AP
    .post("/newAdmin", NewAdmin.NewAdmin)
    .post("/scoreannouncement", ScoreAnnouncement.scoreForm)

    .get("/persons", GetAllPersonsController.getAllPersons) //Custom route used to get all persons
    .get("/getAdmin", AdminListController.getAdminList) // Custom route used to get all Admins
    .get("/getUsers", StudentListController.getAllStudents) //Custom route used to get all students
    .get("/confirm/:token",  SignUp.confirm)
    // .get("/public/confirm.html", SignUp. confirm)
   
    


module.exports = router;