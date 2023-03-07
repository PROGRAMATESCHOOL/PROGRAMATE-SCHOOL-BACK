const personServices = require('../services/PersonServices');
const Person = require('../models/personsModel');
const bcrypt = require('bcrypt');
const {getToken, getTokenData } = require('../config/jwtConfig');
const {getTemplate, sendEmail, } = require('../config/mailConfig');
const { v4: uuidv4 } = require('uuid');
const { clearScreenDown } = require('readline');

const {getToken, getTokenData } = require('../config/jwtConfig');
const {getTemplate, sendEmail, } = require('../config/mailConfig');
const { v4: uuidv4 } = require('uuid');
const { clearScreenDown } = require('readline');


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
        //Verify that the user Does Not exist -AP
        const existedDocumentUser= await Person.findOne ({documentPerson}).exec();

        const existedEmailUser = await Person.findOne({ emailPerson }).exec();
        const existedEmailUser = await Person.findOne({ emailPerson }).exec();

    if (existedDocumentUser) {
        res.status(409).send({ status: "Ya existe un usuario con este documento"})
        console.log("Este usuario ya Existe")
        return
    } else if (existedEmailUser) {
        res.status(408).send({ status: "Ya existe un usuario con este Correo"})
        console.log("Este usuario ya Existe")
        return
    }

    if(!existedDocumentUser && !existedEmailUser){

            const passwordPerson = name1Person + lastname1Person + documentPerson
            //In next version should include email automation with Nodemailer lib 
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
            });
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
            });

            newUser.save(); 
            console.log("Registro Exitoso")
        }

        //Get code
        const code = uuidv4(); 

        //Get Token
        const token = getToken({emailPerson, codePerson });
                
        //Get Template
        const template = getTemplate (name1Person, lastname1Person, token)
  
        //Send Email
        await sendEmail(emailPerson, 'Este es un email de prueba', template)
        
        // await newUser.save(); 
        res.json(); 
        
} 

const confirm = async (req, res) => {
    try {

        //Get token
        const { token } = req.params;

        //Verificated data of the token
        const data = await getTokenData( token );
        if(data === null) {
            return res.json({
                success: false,
                msg: 'Error al obtener data'
            });
        }
        console.log(data);

        const { emailPerson, codePerson} = data.data

        //Verificated if user exist
        //This is the const definied in the personModel
        const Person = await Person.findOne({ emailPerson}) || null;
        
        if (Person === null){
            return res.json({
                success: false,
                msg: 'Usuario NO Existe -AP'
            });
            
        }

        //Vericated code

        if(codePerson !== Person.codePerson){
            return res.redirect('/error.html');
        }

        // Update an user 
        Person.statusPerson = "VERIFIED";
        await newUser.save();

        //Redirect confirmation
        return res.redirect('/confirm.html')



    } catch (error) {
        console.log(error);
        return res.json({
            success: false,
            msg: 'Error al confirmar usuario'
        })
    }

}
      


module.exports = {
    SignUp, 
    confirm,
}
