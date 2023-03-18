const personServices = require("../services/PersonServices");
const Person = require("../models/personsModel");
const { compare } = require("../helpers/handleBcrypt");
const { tokenSign } = require("../helpers/sessionToken");

const loginPerson = async (req, res) => {
  const { emailPerson, passwordPerson, profilePerson } = req.body;

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

    res.status(200).send({
      Message: "login successful", 
      sessionToken
    }); //Success status created for password
  }
};

module.exports = {
  loginPerson,
};