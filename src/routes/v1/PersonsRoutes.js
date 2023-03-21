const router = require("express").Router();
const LoginController = require("../../controllers/LoginController");
const GetAllPersonsController = require("../../controllers/GetAllPersonsController");
const SignUp = require("../../controllers/RegisterController");
const NewAdmin = require("../../controllers/NewAdminController");
const AdminListController = require("../../controllers/AdminListController");
const StudentListController = require("../../controllers/StudentListController") 
const NewAnnouncement = require("../../controllers/NewAnnouncementController")
const DeleteAnnouncement = require("../../controllers/DeleteAnnouncementController");
const SignUpInAnnouncement = require("../../controllers/RegisterToAnnouncementController")
const disableAnnouncement = require("../../controllers/DisabledAnnouncementController")

const checkAuth = require("../../middleware/authentication");
const checkProfileAuth = require("../../middleware/RoleAuth");

//This is an inicial version of the router, might change due to Functionality & new features

router
  .get(
    "/persons",
    checkAuth,
    checkProfileAuth(["Admin", "SuperAdmin"]),
    GetAllPersonsController.getAllPersons
  ) //Custom route used to get all persons
  .get("/getAdmin", AdminListController.getAdminList) // Custom route used to get all Admins
  .get("/getUsers", StudentListController.getAllStudents) //Custom route used to get all students
  .get("/confirm/:token", SignUp.confirm)
  // .get("/public/confirm.html", SignUp. confirm)

  .post("/newAdmin", NewAdmin.NewAdmin)
  //.post("/scoreannouncement", ScoreAnnouncement.scoreForm)
  .post("/addnewannouncement", NewAnnouncement.AddAnnouncement) //Custom route used to create announcement
  
  .post("/registertoannouncement", SignUpInAnnouncement.RegisterToAnnouncement) //Custom route used to register announcement 
  
  .delete("/DeleteAnnouncement", DeleteAnnouncement.deleteAnnouncement) //Custom route used to delete announcement
  .patch("/disabledAnnouncement/:id", disableAnnouncement.disableAnnouncement) //Custom route used to disable announcement

  
  
module.exports = router;
