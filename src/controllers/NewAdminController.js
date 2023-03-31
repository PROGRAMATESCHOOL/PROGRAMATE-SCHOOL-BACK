const Person = require("../models/personsModel");
const uniqid = require("uniqid");
const { encrypt } = require("../helpers/handleBcrypt");
const { sendEmail, getTemplatePasswordAdmin, getTemplateRecoverPassword } = require("../config/mailconfig");

const NewAdmin = async (req, res) => {
    const {
        name1Person,
        name2Person,
        lastname1Person,
        lastname2Person,
        documentPerson,
        emailPerson,
        positionPerson,
    } = req.body; //Parse the request for using data

    const existentAdmin = await Person.findOne({ emailPerson }).exec();
    const existentDocumentAdmin = await Person.findOne({ documentPerson }).exec(); //searches for an existing user with the same document or email

    if (existentAdmin || existentDocumentAdmin) {
        res.status(409).send({ status: "Admin already exists" }); //Compares in case already exists and return error code
        return;
    } else {
        const profilePerson = "Admin";


        if (profilePerson == "Admin") {
            const passwordP = uniqid(undefined, lastname1Person);
            const passwordHash = await encrypt(passwordP);

            const createNewAdmin = new Person({
                name1Person: name1Person,
                name2Person: name2Person,
                lastname1Person: lastname1Person,
                lastname2Person: lastname2Person,
                documentPerson: documentPerson,
                emailPerson: emailPerson,
                profilePerson: profilePerson,
                passwordPerson: passwordHash,
                positionPerson: positionPerson,
            });

            createNewAdmin.save();
            res
                .status(201)
                .send({ status: "New admin created", data: createNewAdmin, passwordP });

            // send an email with credentials

            const templatepasswordAdmin = getTemplatePasswordAdmin(
                createNewAdmin.name1Person,
                createNewAdmin.lastname1Person,
                createNewAdmin.emailPerson,
                passwordP
            );
            await sendEmail(emailPerson, "Datos de ingreso", templatepasswordAdmin);

            console.log(
                "Se han enviado los datos de ingreso al correo del admin",
                createNewAdmin.name1Person
            );


            //End email credentials

            return;
        } else { //if profile person is not 2 return error code, might change in future updates
            res.status(401).send({ status: "Not an allowed profile" });
        }
    }
};

const RecoverPassword = async (req, res) => {
    const { emailPerson } = req.body;

    const existedEmailAdmin = await Person.findOne({ emailPerson: emailPerson }).exec();

    if (existedEmailAdmin) {
        const passwordPerson = uniqid(undefined, existedEmailAdmin.lastname1Person);
        
        const templateRecoverPassword = getTemplateRecoverPassword(
            existedEmailAdmin.name1Person,
            existedEmailAdmin.lastname1Person,
            existedEmailAdmin.emailPerson,
            passwordPerson
        );

        await sendEmail(emailPerson, "Recuperación de contraseña", templateRecoverPassword);

        res.status(200).send({ status: "Se han enviado los datos de recuperación de contraseña del Administrador" });

        console.log(
            "Se han enviado los datos de recuperación de contraseña del administrador: ",
            existedEmailAdmin.emailPerson
        );
    } else { res.status(401).send({ status: "No existe un usuario con este correo" }); }
};

module.exports = {
    NewAdmin,
    RecoverPassword
<<<<<<< HEAD
};
=======
};
>>>>>>> 1d62b190014f8c9e6348b2331eddb8d5a3d62ee6
