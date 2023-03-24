const Person = require('../models/personsModel');
const bcrypt = require("bcrypt");

// get the list of students

const getAllStudents = async (req, res) => {
    try {
        const students = await Person.find({ profilePerson : "Student" });
        res.status(200).json(students);
    } catch (err) {
    //return res.status(200).json({ msg: err.message });
    res.json({ message: err.message });
    }
};

module.exports = {
    getAllStudents,
};
