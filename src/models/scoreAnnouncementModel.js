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
    ScoreProfile: {
        type: Number,
        require: false
    },
    ScoreVocation: {
        type: Number,
        require: false
    },
    ScoreMotivation: {
        type: Number,
        require: false
    },
    ScoreLogic: {
        type: Number,
        require: false
    },
    ScoreTotal: {
        type: Number,
        require: false
    },
    stateAnnouncementStudent: {
        type: Number,
        require: false
    }
})

module.exports = mongoose.model("ScoreForm", ScoreAnnouncementSchema);
