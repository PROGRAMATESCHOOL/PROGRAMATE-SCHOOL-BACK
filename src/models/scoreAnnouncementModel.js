const mongoose = require("mongoose");
const  { Schema, ObjectId, model } = require("mongoose")

const ScoreAnnouncementSchema = new mongoose.Schema({
    idAnnouncement: {
        type: Schema.Types.ObjectId,
        ref: 'AnnouncementSchema' // Referenced from announcementModel
    },
    nameAnnouncement: {
        type: String,
        ref: 'AnnouncementSchema' // Referenced from announcementModel
    },
    idStudent: {
        type: Schema.Types.ObjectId,
        ref: 'PersonSchema' // Referenced from personModel
    },
    name1Student: {
        type: String,
        ref: 'PersonSchema' //Referenced from personModel
    },
    lastname1Student: {
        type: String,
        ref: 'PersonSchema' //Referenced from personModel
    },
        // THE NEXT FIELDS SHOWS US THS STUDENT'S SCORE
    ScoreProfile: {
        type: Number,
        ref: 'Questionarychema'
    },
    ScoreVocation: {
        type: Number,
        ref: 'Questionarychema'
    },
    ScoreMotivation: {
        type: Number,
        ref: 'Questionarychema'
    },
    ScoreLogic: {
        type: Number,
        ref: 'Questionarychema'
    },
    ScoreTotal: {
        type: Number,
        ref: 'Questionarychema'
    },
    stateAnnouncementStudent: {
        type: String,
        ref: 'Questionarychema'
    }
})

module.exports = mongoose.model("ScoreForm", ScoreAnnouncementSchema);
