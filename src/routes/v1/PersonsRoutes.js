const router = require('express').Router();
const LoginController = require("../../controllers/LoginController");
const GetAllPersonsController = require("../../controllers/GetAllPersonsController");
const RegisterController =require ('../../controllers/RegisterController');



//This is an inicial version of the router, might change due to Functionality & new features

router
    .get("/persons", GetAllPersonsController.getAllPersons)//Custom route used to get all persons
    .post("/login", LoginController.loginPerson) //Custom route for Log In 
    .post("/SignUp", [],RegisterController.SignUp) //Custom route for SignUp
    // .get("/confirm/:token", [], RegisterController.confirm)

module.exports = router;