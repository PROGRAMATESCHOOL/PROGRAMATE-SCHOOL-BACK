const personServices = require('../services/PersonServices');
const Person = require('../models/personsModel');
const bcrypt = require('bcrypt');

const SignUp = async (req, res) => {
    const {
        name1Person,
        name2Person,
        lastname1Person,
        lastname2Person,
        documentPerson,
        emailPerson,
        profilePerson,
        institutionPerson,
        agePerson
    } = req.body

    const existedDocumentUser= await Person.findOne({ documentPerson }).exec();

    const existedEmailUser = await Person.findOne({ emailPerson }).exec();

    if(existedDocumentUser) {
        console.log("Este usuario ya Existe")
        return
    }

    if(existedEmailUser){
        console.log("Este email ya existe")
        return
    }

    if(!existedDocumentUser && !existedEmailUser){

        const passwordPerson = name1Person + lastname1Person + documentPerson
        //In next version should include email automation with Nodemailer lib 

        const newUser = new Person ({
            name1Person:name1Person,
            name2Person:name2Person,
            lastname1Person:lastname1Person,
            lastname2Person:lastname2Person,
            documentPerson:documentPerson,
            emailPerson:emailPerson,
            profilePerson:profilePerson,
            institutionPerson:institutionPerson,
            passwordPerson:passwordPerson,
            agePerson:agePerson
        }) 

        newUser.save(); 
        console.log("Registro Exitoso")
    }
}

module.exports = {
    SignUp
}
