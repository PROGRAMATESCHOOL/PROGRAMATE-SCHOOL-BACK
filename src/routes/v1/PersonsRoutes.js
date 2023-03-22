const router = require("express").Router();
const LoginController = require("../../controllers/LoginController");
const GetAllPersonsController = require("../../controllers/GetAllPersonsController");
const SignUp = require("../../controllers/RegisterController");
const NewAdmin = require("../../controllers/NewAdminController");
const AdminListController = require("../../controllers/AdminListController");
const StudentListController = require("../../controllers/StudentListController") 
const AnnouncementListController = require("../../controllers/AnnouncementListController")
const NewAnnouncement = require("../../controllers/NewAnnouncementController")
const DeleteAnnouncement = require("../../controllers/DeleteAnnouncementController");
const SignUpInAnnouncement = require("../../controllers/RegisterToAnnouncementController");
const disableAnnouncement = require("../../controllers/DisabledAnnouncementController");

const  ModifyStudent = require('../../controllers/DisabledStudentController');

const StageStudent = require("../../controllers/StudentStageAnnouncement")

const AnnouncementsStats = require("../../controllers/StatsAnnouncementController")



const checkAuth = require("../../middleware/authentication");
const checkProfileAuth = require("../../middleware/RoleAuth");


//This is an inicial version of the router, might change due to Functionality & new features

router
  .get("/persons", checkAuth, checkProfileAuth(['Admin','SuperAdmin']), GetAllPersonsController.getAllPersons) //Custom route used to get all persons
  .get("/getAdmin", AdminListController.getAdminList) // Custom route used to get all Admins
  .get("/getUsers", StudentListController.getAllStudents) //Custom route used to get all students
  .get("/confirm/:token", SignUp.confirm)
  .get("/getannouncements", AnnouncementListController.getAnnouncementList) //Custom route used to get all announcements
  
  .get("/getstagestudent", StageStudent.StudentStageAnnouncement) // Custom route used to get info about process one student

  .get("/getStatistics", AnnouncementsStats.StatsAnnouncements) // Custom route used to get stats about all announcements

  // .get("/public/confirm.html", SignUp. confirm)

  .post("/newAdmin", NewAdmin.NewAdmin)
  
  .post("/addnewannouncement", NewAnnouncement.AddAnnouncement)
  
  .post("/registertoannouncement", SignUpInAnnouncement.RegisterToAnnouncement)
  
  .delete("/DeleteAnnouncement", DeleteAnnouncement.deleteAnnouncement) //Custom route used to delete announcement
  .patch("/disabledAnnouncement/:nameAnnouncement", disableAnnouncement.disableAnnouncement) //Custom route used to disable announcement

  .patch("/deleteStudent/:documentPerson",  ModifyStudent.modifyStudent) // Custom route used to disabled student

  .delete("/DeleteAnnouncement", DeleteAnnouncement.deleteAnnouncement)
  
  .post("/disableAnnouncement", DisableAnnouncement.disableAnnouncemet)
   
module.exports = router;


  
  

