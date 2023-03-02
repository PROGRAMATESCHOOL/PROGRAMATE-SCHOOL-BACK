const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({
    // PersonID: Its generated by MongoDB
    // We can generate an ID with a extension: uuid or another 

    name1Person: {
        type: String,
        require: true
    },
    name2Person: {
        type: String,
        require: false
    },
    lastname1Person: {
        type: String,
        require: true
    },
    lastname2Person: {
        type: String,
        require: false
    },
    documentPerson: {
        type: String,
        require: true
    },

    emailPerson: {
        type: String,
        require: true,
        unique: true
    },

    profilePerson: {
        type: Number,
        require: false
    },
    institutionPerson: {
        type: String,
        require: false
    },

    passwordPerson: {
        type: String,
        require: true,
    },

    agePerson: {
        type: Number,
        require: false
    },

    positionPerson: {
        type: String,
        require: false
    },
    //Review if code person is required in this model -AP
    codePerson:{
        type: String,
        require: true,
    },
//This status is add for default because all the email have to verificated - AP
    statusPerson:{
        type: String,
        require: true,
        default: 'UNVERIFIED'
    },

    

module.exports = mongoose.model("PersonModel", PersonSchema)
