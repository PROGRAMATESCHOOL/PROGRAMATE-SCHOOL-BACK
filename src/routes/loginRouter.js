const express = require("express");
const loginController = require("../controllers/LoginController");

const router = express.Router();

router.post('/', (req,res)=>{
  res.send("login access")
})

//router
  //.get("/" loginController.getAll)
  //.get("/", loginController.getOne)
  //.post("/", loginController.createNew)
  //.patch("/", loginController.updateOne)
  //.delete("/", loginController.deleteOne);

module.exports = router;