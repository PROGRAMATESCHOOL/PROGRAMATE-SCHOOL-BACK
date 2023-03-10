const personServices = require('../services/PersonServices');
const Person = require('../models/personsModel');
const bcrypt = require('bcrypt');
const {getToken, getTokenData } = require('../config/jwtConfig');
const {getTemplate, sendEmail, getTemplatePassword } = require('../config/mailConfig');
// const { sendPassword, getTemplatePassword}= require('../config/mailPassword')
const { v4: uuidv4 } = require('uuid');
const { clearScreenDown } = require('readline');

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
            profilePerson,
            institutionPerson,
            agePerson,
        } = req.body

 
        //Verify that the user Does Not exist -AP
        let person =await Person.findOne({documentPerson, emailPerson,}) || null;
       
        if(person !== null){
            return res.json({
                success:false,
                msg: 'Este usuario ya existe'
            });
        }

        //Get code
        const codePerson = uuidv4(); 

        //Creted a new user or student
        const passwordPerson = name1Person + lastname1Person + documentPerson

        person = new Person ({
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
                codePerson: codePerson,
        });

        //Get Token
        const token = getToken({emailPerson, codePerson });

        //Get Template
        const template = getTemplate (name1Person, lastname1Person, token);

        //Send Email
        await sendEmail(emailPerson, 'CONFIRMAR EMAIL', template)

        //Save the user/student
        await person.save(); 

        res.json({
            success: true,
            msg: "Registro Exitoso"
        }); 
    } catch (error){
        console.log(error);
        return res.json({
            success: false,
            msg: 'Error al registrar usuario'
        });
    }      
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
        // console.log(data, "esta es la data del token");

        const { emailPerson, codePerson} = data.data

        //Verificated if user exist
        //This is the const definied in the personModel
        const person = await Person.findOne({ emailPerson}) || null;
        
        if (person === null){
            return res.json({
                success: false,
                msg: 'Usuario NO Existe -AP'
            });
            
        }

        //Vericated code

        if(codePerson !== person.codePerson){
            return res.redirect('/error.html');
        }

        // Update user 

        person.statusPerson = "VERIFIED";
        await person.save();

        console.log('El estatus del usuario ', person.emailPerson, 'ahora es: ', person.statusPerson)

        if(person.statusPerson === 'VERIFIED'){

            //Get Template Password

            const templatepassword = getTemplatePassword (person.name1Person, person.lastname1Person, person.emailPerson, person.passwordPerson );
            await sendEmail(emailPerson, 'Datos de ingreso', templatepassword)

            console.log('Se han enviado los datos de ingreso al correo', person.emailPerson)

           return res.json({
            success: false,
            msg: 'Error al enviar datos de ingreso'
        })
       }

        //Redirect confirmation
        return res.redirect('../../public/confirm.html')



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
    confirm
}

