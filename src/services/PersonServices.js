const Person = require("../models/personsModel");

const loginPerson = () => {
    const logPerson = Person.loginPerson();
    return logPerson
}

const getAllPersons = () => {
    const allPersons = Person.getAllPersons();
    return allPersons;
}

const singUp = () => {
    const register = Person.singUp();
    return register
}


module.exports = {
    loginPerson,
    getAllPersons,
    singUp
}
