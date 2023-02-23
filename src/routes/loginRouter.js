const express = require("express");
const pruebaController = require("../controllers/prueba");

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