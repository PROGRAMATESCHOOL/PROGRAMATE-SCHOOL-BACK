const personServices = require('../services/PersonServices');
const Person = require('../models/personsModel');
const bcrypt = require("bcrypt");

// get one student

const getOneStudent = async (req, res) => {
    const {_id} = req.body

    try {
        const OneStudent = await Person.find({_id: _id});
        res.json(OneStudent);
    } catch (err) {
    //return res.status(200).json({ msg: err.message });
    res.json({ message: err.message });
    }
};

module.exports = {
    getOneStudent,
};
