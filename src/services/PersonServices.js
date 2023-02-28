const Person = require("../models/personsModel");

const loginPerson = () => {
    const logPerson = Person.loginPerson();
    return logPerson
}

const getAllPersons = () => {
    const allPersons = Person.getAllPersons();
    return allPersons;
}


const formAnnouncement = () => {
    const formScore = 0;
    return formScore
}

module.exports = {
    loginPerson,
    getAllPersons,
    formAnnouncement
}