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

    const existedDocumentUser= await Person.findOne ({documentPerson}).exec();

    const existedEmailUser = await Person.findOne ({emailPerson}).exec();

    if(existedDocumentUser) {
        console.log('Usuaro ya Existente')
        return
    }

    if(existedEmailUser){
        console.log('Email ya Registrado')
        return
    }

    if(!existedDocumentUser && !existedEmailUser){

        const passwordPerson = name1Person + lastname1Person + documentPerson

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
        console.log ('Registro Exitoso')
        return
    }
}

module.exports = {SignUp}
