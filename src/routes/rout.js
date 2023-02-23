const router = require('express').Router();

//se llama el esquema
const User = require('../models/personsModel');

//se encripta la contraseña
const Joi = require('@hapi/joi');
const schemaRegister = Joi.object({
    namePerson:Joi.string().min(3).required(),
    documentPerson:Joi.required(),
    emailPerson:Joi.string().required().email(),
    profilePerson:Joi.required(),
    institutionPerson:Joi.required(),
    passwordPerson:Joi.string().min(8).required(),
    agePerson:Joi.required()
})

router.post('/register', async(req,res) => {
    
    //validaciones de usuario
    const {error} = schemaRegister.validate(req.body)
    
    if (error){
        return res.status(400).json({error:error.details[0].message})
    }

    //lo que vamos a capturar del front
    const user = new User({
        namePerson:req.body.namePerson,
        documentPerson:req.body.documentPerson,
        emailPerson:req.body.emailPerson,
        profilePerson:req.body.profilePerson,
        institutionPerson:req.body.institutionPerson,
        passwordPerson:req.body.passwordPerson,
        agePerson:req.body.agePerson,
    })

    try{

        const userDB = await user.save();
        res.json({
            error:null,
            data:userDB
        })

    } catch (error){
        res.status(400).json(error)
    }

})

module.exports = router;