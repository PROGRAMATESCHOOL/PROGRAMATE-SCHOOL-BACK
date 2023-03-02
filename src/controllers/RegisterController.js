const personServices = require('../services/PersonServices');
const Person = require('../models/personsModel');
const bcrypt = require('bcrypt');
const {getToken, getTokenData } = require('../config/jwtConfig');
const SignUp = async (req, res) => {

    //Get data for user -AP
    const {
        name1Person,
        name2Person,
        lastname1Person,
        lastname2Person,
        documentPerson,
        emailPerson,
        profilePerson,
        institutionPerson,
        agePerson,
        codePerson,
        statusPerson,
    } = req.body

    //Verify that the user Does Not exist -AP
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
 //Created new user
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
            agePerson:agePerson,
            statusPerson: statusPerson,
            codePerson: codePerson,
        }) 

        newUser.save(); 
        console.log ('Registro Exitoso')
        return
    }

    //Get Token
     const token = getToken();
}

module.exports = {SignUp}
