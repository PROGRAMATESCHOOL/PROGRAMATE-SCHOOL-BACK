const nodemailer = require("nodemailer");
require('dotenv').config( );
// const Person = require('../models/personsModel');

//Here, the constant "mail" store the user and password of the SUPERADMIN o the email definite for programate school.

//For this test, I used a google mail that is save in the .env, also the data in the constant 'transport'is the mailtrap.

let transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.userEmail,
      pass: process.env.passEmail
    },
    tls: {
        rejectUnauthorized: false
    }
});

const sendEmail = async (emailPerson, subject, html ) => {
    try {
        await transport.sendMail({
            from: ` ProgramateSchool <$( process.env.userEmail )>` ,// sender address
            to: emailPerson, // list of receivers
            subject,// Subject line
            text: "Holaaaa, vamos a verificar tu correo", // plain text body
            html,
        });

    } catch (error) {
        console.log('Algo no va bien con el Email', error);
        // res
        // .status (401)
        // .send({status: 'Error con el email', data:sendEmail})     
          
    }     
}

const getTemplate = (name1Person, lastname1Person, token) => {
    return `
      <head>
          <link rel="stylesheet" href="./style.css">
      </head>
      
      <div id="email___content">
          <img src="" alt="">
          <h2>Hola ${ name1Person + " "+ lastname1Person }</h2>
          <p>Para verificar tu cuenta y continuar con el registro en la plataforma de  Programate School, ingresa al siguiente enlace:</p>
          <a
              href="http://localhost:3000/api/confirm/${ token }"
              target="_blank"
          >Confirmar Cuenta</a>
      </div>
    `;
}



module.exports={
    sendEmail,
    getTemplate,
}