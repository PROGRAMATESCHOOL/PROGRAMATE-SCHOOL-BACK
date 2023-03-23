const personServices = require('../services/PersonServices');
const Person = require('../models/personsModel');
const bcrypt = require("bcrypt");

// get one student

const getOneStudent = async (req, res) => {
    const {id} = req.body

    try {
        const OneStudent = await Person.find({_id: id});
        res.json(OneStudent)
        console.log(OneStudent)
        // res.status(200)
        // res.send(OneStudent);
    } catch (err) {
    //return res.status(200).json({ msg: err.message });
    res.json({ message: err.message });
    }
};

module.exports = {
    getOneStudent,
};
