const Person = require("../models/personsModel");

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


module.exports = {
    loginPerson,
    getAllPersons,
    SignUp,
    getAllStudents
}
