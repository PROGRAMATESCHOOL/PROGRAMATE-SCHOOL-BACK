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

const SignUp = () => {
    const register = Person.SignUp();
    return register
}

const getAllStudents = () => {
    const allStudents = Person.getAllStudents();
    return allStudents
}


const CreateAdmin = () => {
    const NewAdminCreated = NewAdmin();
    return NewAdminCreated
}
const formAnnouncement = () => {
    const formScore = ScoreAnnouncement.scoreForm();
    return formScore

}

module.exports = {
    loginPerson,
    getAllPersons,
    SignUp,
    getAllStudents,
    CreateAdmin,
    formAnnouncement,

}
