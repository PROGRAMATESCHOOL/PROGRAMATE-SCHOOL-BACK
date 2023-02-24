const Person = require("../models/personsModel");

const loginPerson = () => {
    const logPerson = Person.loginPerson();
    return logPerson
}

const getAllPersons = () => {
    const allPersons = Person.getAllPersons();
    return allPersons;
}

module.exports = {
    loginPerson,
    getAllPersons
}