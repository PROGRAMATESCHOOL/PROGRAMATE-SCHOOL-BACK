const Person = require("../models/personsModel");
const bcrypt = require("bcrypt");
const { getToken, getTokenData } = require("../config/jwtConfig");
const { getTemplate, sendEmail, getTemplatePassword, getTemplateRecoverPassword, } = require("../config/mailconfig");
// const { sendPassword, getTemplatePassword}= require('../config/mailPassword')
const { v4: uuidv4 } = require("uuid");
const { clearScreenDown } = require("readline");
const { encrypt } = require("../helpers/handleBcrypt");

const SignUp = async (req, res) => {
  try {
    //Get data for user -AP
    const {
      name1Person,
      name2Person,
      lastname1Person,
      lastname2Person,
      documentPerson,
      emailPerson,
      institutionPerson,
      agePerson,
    } = req.body;

    //Verify that the user Does Not exist -AP
    //let person =await Person.findOne({documentPerson, emailPerson,}) || null;

    const existedDocumentUser = await Person.findOne({ documentPerson }).exec();
    const existedEmailUser = await Person.findOne({ emailPerson }).exec();

    if (existedDocumentUser) {
      res.send("Ya existe un usuario registrado con este documento");
    } else {
      if (existedEmailUser) {
        res.send("Ya existe un usuario registrado con este correo");
      } else {
        //Get code
        const codePerson = uuidv4();

        const profilePerson = "Student";

        //Creted a new user or student
        const passwordPerson = name1Person + lastname1Person + documentPerson;

        const passwordHash = await encrypt(passwordPerson);

        let person = new Person({
          name1Person: name1Person,
          name2Person: name2Person,
          lastname1Person: lastname1Person,
          lastname2Person: lastname2Person,
          documentPerson: documentPerson,
          emailPerson: emailPerson,
          profilePerson: profilePerson,
          institutionPerson: institutionPerson,
          passwordPerson: passwordHash,
          agePerson: agePerson,
          codePerson: codePerson,
        });

        //Get Token
        const token = getToken({ emailPerson, codePerson });

        //Get Template
        const template = getTemplate(name1Person, lastname1Person, token);

        //Send Email
        await sendEmail(emailPerson, "CONFIRMAR EMAIL", template);

        //Save the user/student
        await person.save();

        res.json({
          success: true,
          msg: "Registro Exitoso",
          data: person,
          password: passwordPerson,
        });
      }
    }
  } catch (error) {
    return res.json({
      success: false,
      msg: "Error al registrar usuario",
      errors: error,
    });
  }
};

const confirm = async (req, res) => {
  try {
    //Get token
    const { token } = req.params;

    //Verificated data of the token
    const data = await getTokenData(token);

    if (data === null) {
      return res.json({
        success: false,
        msg: "Error al obtener data",
      });
    }

    const { emailPerson, codePerson } = data.data;

    //Verificated if user exist
    //This is the const definied in the personModel
    const person = (await Person.findOne({ emailPerson })) || null;

    if (person === null) {
      return res.json({
        success: false,
        msg: "Usuario NO Existe -AP",
      });
    }

    //Vericated code

    if (codePerson !== person.codePerson) {
      return res.redirect("/error.html");
    }

    // Update user

    person.statusPerson = "VERIFIED";
    await person.save();

    if (person.statusPerson === "VERIFIED") {
      //Get Template Password
      const passwordPerson = person.name1Person + person.lastname1Person + person.documentPerson

      const templatepassword = getTemplatePassword(
        person.name1Person,
        person.lastname1Person,
        person.emailPerson,
        passwordPerson
      );
      await sendEmail(emailPerson, "Datos de ingreso", templatepassword);


      return res.status(200).send({ status: "Se ha verificado el correo, revisalo nuevamente para conocer tus credenciales" });
    }

    //Redirect confirmation
    return res.redirect("../../public/confirm.html");
  } catch (error) {
    return res.json({
      success: false,
      msg: "Error al confirmar usuario",
      errors: error,
    });
  }
};

const RecoverPassword = async (req, res) => {
  const { emailPerson } = req.body;


  const existedEmailUser = await Person.findOne({ emailPerson: emailPerson }).exec();
  const passwordPerson = existedEmailUser.name1Person + existedEmailUser.lastname1Person + existedEmailUser.documentPerson;

  if (existedEmailUser, passwordPerson) {

    const templateRecoverPassword = getTemplateRecoverPassword(
      existedEmailUser.name1Person,
      existedEmailUser.lastname1Person,
      existedEmailUser.documentPerson,
      passwordPerson

    );
    await sendEmail(emailPerson, "Recuperación de contraseña", templateRecoverPassword);

    res.status(200).send({ status: "Se han enviado los datos de recuperación de contraseña " });

    console.log(
      "Se han enviado los datos de recuperación de contraseña de: ",
      existedEmailUser.name1Person
    );
  } else {
    res.status(401).send({ status: "No existe un usuario con este correo" });
  }



}

module.exports = {
  SignUp,
  confirm,
  RecoverPassword,
<<<<<<< HEAD
};
=======
};
>>>>>>> 1d62b190014f8c9e6348b2331eddb8d5a3d62ee6
