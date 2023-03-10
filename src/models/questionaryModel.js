const mongoose = require("mongoose");
const  { Schema, ObjectId, model } = require("mongoose")

const ScoreAnnouncementSchema = new mongoose.Schema({
    idAnnouncement: {
        type: Schema.Types.ObjectId,
        ref: 'AnnouncementSchema' // Referenced from announcementModel
    },
    idStudent: {
        type: Schema.Types.ObjectId,
        ref: 'PersonSchema' // Referenced from personModel
    },
    q1_name1Person: {
        type: String,
        require: true
    },
    q2_name2Person: {
        type: String,
        require: true
    },
    q3_lastname1Person: {
        type: String,
        require: true
    },
    q4_lastname2Person: {
        type: String,
        require: true
    },
    q5_birthdate: {
        type: String,
        require: true
    },
    q6_agePerson: {
        type: String,
        require: true
    },
    q7_gender: {
        type: String,
        require: true
    },
    q8_document: {
        type: String,
        require: true
    },
    q9_documentPerson: {
        type: String,
        require: true
    },
    q10_institutionPerson: {
        type: String,
        require: true
    },
    q11_course: {
        type: String,
        require: false
    },
    q12_sena: {
        type: String,
        require: false
    },
    q13_availability: {
        type: String,
        require: false
    },
    q14_emailPerson: {
        type: String,
        require; false
    }, 
    q15_phone: {
        type: Number,
        require: false
    }
})

module.exports = mongoose.model("ScoreForm", ScoreAnnouncementSchema);
