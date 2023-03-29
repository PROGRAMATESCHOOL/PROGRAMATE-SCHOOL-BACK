const Person = require('../models/personsModel');
const bcrypt = require("bcrypt");

// get one student

const getOneStudent = async (req, res) => {
    const { idPerson } = req.body

    try {
        const oneStudent = await Person.findOne({ _id: idPerson })
        res.status(200).send(oneStudent);
        console.log(oneStudent)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

};

module.exports = {
    getOneStudent,
};