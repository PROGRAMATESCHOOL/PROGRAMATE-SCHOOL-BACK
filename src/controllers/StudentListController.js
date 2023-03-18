const personServices = require('../services/PersonServices');
const Person = require('../models/personsModel');
const bcrypt = require("bcrypt");

// get the list of students

const getAllStudents = async (req, res) => {
    try {
        const students = await Person.find({ profilePerson : 3 }); //searches for a existing user with the profile type
        res.json(students);
    } catch (err) {
    //return res.status(200).json({ msg: err.message });
    res.json({ message: err.message });
    }
};

module.exports = {
    getAllStudents,
};
