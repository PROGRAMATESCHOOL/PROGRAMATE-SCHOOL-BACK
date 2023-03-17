const personServices = require("../services/PersonServices");
const Person = require("../models/personsModel");
const { compare } = require("../helpers/handleBcrypt");
const { tokenSign } = require("../helpers/sessionToken");
const cookieHelper = require("../helpers/handleCookies");

const loginPerson = async (req, res) => {
  const { emailPerson, passwordPerson, profilePerson } = req.body;

  const existingUserByEmail = await Person.findOne({ emailPerson }).exec();
  
  const checkPassword = await Person.findOne({ passwordPerson }).exec();

  if (!existingUserByEmail) {
    //alert("Correo no registrado. Por favor registrese si es estudiante, si es administrador, contacte a la mesa de ayuda")
    return res.status(401).send({ errors: ["Usuario no encontrado"] });
  } 
  const user = await Person.findOne({ emailPerson }).exec();
  if (!user) {
    return res.status(404).send({ errors: ["Usuario no encontrado"] });
  }

  const checkPassword = await compare(passwordPerson, user.passwordPerson); //Test if password sent by user is the same as the password hash saved in database
  

  if (!checkPassword) {
    return res.status(403).send({ errors: ["Contraseña incorrecta"] });
  }
  if (checkPassword) {
    const sessionToken = await tokenSign(user);
    cookieHelper(res, "access_token", sessionToken);
    
    res.status(200).send({
      Message: "login successful", 
      data: sessionToken
    }); //Success status created for password
  }
};

module.exports = {
  loginPerson,
};
