const Person = require("../models/personsModel")
const uniqid = require("uniqid")
const { encrypt } = require("../helpers/handleBcrypt")
const { sendEmail, getTemplatePasswordAdmin, getTemplateRecoverPassword } = require("../config/mailconfig")

const recoveryPassword = async (req, res) => {
    const { emailPerson } = req.body

    const existedUser = await Person.findOne({ emailPerson: emailPerson}).exec()

    if (existedUser){
        const ProfilePerson = existedUser.profilePerson

        if (ProfilePerson == "Student") {
            const PasswordStudent = existedUser.name1Person+existedUser.lastname1Person+existedUser.documentPerson

            const templateRecoverPassword = getTemplateRecoverPassword(
                existedUser.name1Person,
                existedUser.lastname1Person,
                existedUser.emailPerson,
                PasswordStudent
            )
            await sendEmail(emailPerson, "Recuperación de contraseña", templateRecoverPassword)

            res.status(200).send({ status: "Se han enviado los datos de recuperación de contraseña a tu correo" })

            console.log("Se han enviado los datos de recuperación de contraseña a tu correo", existedUser.name1Person)
        }
        if (ProfilePerson == "Admin") {
            const PasswordAdmin = uniqid(undefined, existedUser.lastname1Person)
            const templateRecoverPassword = getTemplateRecoverPassword(
                existedUser.name1Person,
                existedUser.lastname1Person,
                existedUser.emailPerson,
                PasswordAdmin
            )

            await sendEmail(emailPerson, "Recuperación de contraseña", templateRecoverPassword)

            res.status(200).send({ status: "Se han enviado los datos de acceso como administrador a tu correo" })

            console.log("Se han enviado los datos de acceso como administrador a tu correo", existedUser.emailPerson)

            const passwordHash = await encrypt(PasswordAdmin)

            const PasswordUpdate = await Person.findOneAndUpdate({emailPerson: emailPerson}, {$set: {passwordPerson: passwordHash}}, {new: true})
        }

    }
    else {
        res.send("Tu correo no está registrado en nuestra base de datos")
    }
}

module.exports = {
    recoveryPassword
}