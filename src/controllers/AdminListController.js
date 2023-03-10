const PersonServices = require ('../services/PersonServices');
const Person = require('../models/personsModel');
const bcrypt = require ("bcrypt");

const getAdminList = async (req, res) => {
    try{
        const getAdmin = await Person.find({ profilePerson : 2 });
        res.json(getAdmin);
    } catch (err) {
        res.json({ message: err.message});
    }
};

module.exports ={getAdminList};