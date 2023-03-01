const Person = require("../models/personsModel");
const ScoreAnnouncement = require("../models/scoreAnnouncementModel");

const loginPerson = () => {
    const logPerson = Person.loginPerson();
    return logPerson
}

const getAllPersons = () => {
    const allPersons = Person.getAllPersons();
    return allPersons;
}

const signUp = () => {
    const registerUser = Person.signUp();
    return registerUser
}

const formAnnouncement = () => {
    const formScore = ScoreAnnouncement.scoreForm();
    return formScore
}

module.exports = {
    loginPerson,
    getAllPersons,
    signUp,
    formAnnouncement
}
