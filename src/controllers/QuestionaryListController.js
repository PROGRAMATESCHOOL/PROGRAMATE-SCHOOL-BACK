const Questionary = require('../models/questionaryModel');
const bcrypt = require("bcrypt");

// get the list of students

const getAllQuestionaries = async (req, res) => {
    try {
        const stuQuest = await Questionary.find({});
        res.status(200).json(stuQuest);
    } catch (err) {
        //return res.status(200).json({ msg: err.message });
        res.json({ message: err.message });
    }
};

module.exports = {
    getAllQuestionaries,
};