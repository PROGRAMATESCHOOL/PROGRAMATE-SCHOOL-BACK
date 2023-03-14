const personServices = require("../services/PersonServices");
const Person = require("../models/personsModel");
const bcrypt = require("bcrypt");

const loginPerson = async (req, res) => {
  const { emailPerson, passwordPerson, profilePerson } = req.body;

  const existingUserByEmail = await Person.findOne({ emailPerson }).exec();
  
  const checkPassword = await Person.findOne({ passwordPerson }).exec();

  if (!existingUserByEmail) {
    //alert("Correo no registrado. Por favor registrese si es estudiante, si es administrador, contacte a la mesa de ayuda")
    return res.status(401).send({ errors: ["Usuario no encontrado"] });
  } 

  if (!checkPassword) {
    //window.alert("Contraseña errónea. Inténtelo de nuevo")
    return res.status(403).send({ errors: ["Contraseña incorrecta"] });
  }
  if (existingUserByEmail && checkPassword){
    res.status(200).json({
      Message: "login successful",
    }); //Success status created for password

    if (profilePerson === 1) {
      res.send("OK");
      alert("Superadmin, ha ingresado a Prográmate School");
      // Direct to main for Superadmin
      return;
    }
    if (profilePerson === 2) {
      res.send("OK");
      alert("Admin, ha ingresado a Prográmate School");
      // Direct to main for Superadmin
      return;
    }
    if (profilePerson === 3) {
      res.send("OK");
      alert("Estudiante, ha ingresado a Prográmate School");
      // Direct to main for Superadmin
      return;
    }
  }
};

module.exports = {
  loginPerson,
};
