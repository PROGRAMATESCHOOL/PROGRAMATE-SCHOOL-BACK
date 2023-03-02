const nodemailer = require("nodemailer");
require('dotenv').config( );

//Here, the constant "mail" store the user and password of the SUPERADMIN o the email definite for programate school.

//For this test, I used "mailtrap" for nodemailer, so the data in the constant 'transport'is the mailtrap.

const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.userEmail,
      pass: process.env.passEmail
    }
});

const sendEmail = async (emailPerson,  subject, html ) => {
    try {
        await transport.sendMail({
            from: ` ProgramateSchool <$( process.env.userEmail )>` ,// sender address
            to: emailPerson, // list of receivers
            subject,// Subject line
            text: "Holaaaa, vamos a verificar tu correo", // plain text body
            html,
        });

    } catch (err){
        console.log('Algo no va bien con el Email', err);

    }
}

const getTemplate = (name1Person, lastname1Person, token) => {
    return `
      <head>
          <link rel="stylesheet" href="./style.css">
      </head>
      
      <div id="email___content">
          <img src="https://i.imgur.com/eboNR82.png" alt="">
          <h2>Hola ${ name1Person + lastname1Person }</h2>
          <p>Para verificar tu cuenta y continuar con el registro en la plataforma de  Programate School, ingresa al siguiente enlace:</p>
          <a
              href="http://localhost:3000/api/user/confirm/${ token }"
              target="_blank"
          >Confirmar Cuenta</a>
      </div>
    `;
}

module.exports={
    sendEmail,
    getTemplate,
}