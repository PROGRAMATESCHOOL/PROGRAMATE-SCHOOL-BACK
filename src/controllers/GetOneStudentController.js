// const personServices = require('../services/PersonServices');
// const Person = require('../models/personsModel');
// const bcrypt = require("bcrypt");

// // get one student

// const getOneStudent = async (req, res) => {
//     const { idPerson} = req.body

//     try {
//         const OneStudent = await Person.findOne({_id: idPerson});
//         res.send(OneStudent)
//         console.log(OneStudent)
//         //res.status(200)
//     } catch (err) {
//         console.log({ message: err.message });
//     }
// };



// module.exports = {
//     getOneStudent,
// };

const personServices = require('../services/PersonServices');
const Person = require('../models/personsModel');
const bcrypt = require("bcrypt");

// get one student

const getOneStudent = async (req, res) => {
    const { idPerson } = req.body

    try {
        const oneStudent = await Person.findOne({ _id: idPerson });
        res.status(200).send(oneStudent);
        console.log(req.body.idPerson)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

};

module.exports = {
    getOneStudent,
};