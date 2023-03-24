const Person = require("../models/personsModel");
const bcrypt = require("bcrypt");

//Get all person registered in the database
const getAllPersons = (req, res) => {
  Person.find((err, result) => {
    if (err) throw new Error(err);
    res.json(result);
    console.log(result);
  });
};

module.exports = {
  getAllPersons,
};
