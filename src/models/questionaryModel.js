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
    question1Announcement: {
        type: String,
        require: true
    },
    question2Announcement: {
        type: String,
        require: true
    },
    question3Announcement: {
        type: String,
        require: true
    },
    question4Announcement: {
        type: String,
        require: true
    },
    question5Announcement: {
        type: String,
        require: true
    },
    question6Announcement: {
        type: String,
        require: true
    },
    question7Announcement: {
        type: String,
        require: true
    },
    question8Announcement: {
        type: String,
        require: true
    },
    question9Announcement: {
        type: String,
        require: true
    },
    question10Announcement: {
        type: String,
        require: true
    },
    question12Announcement: {
        type: String,
        require: true
    },
    question13Announcement: {
        type: String,
        require: true
    },
    question14Announcement: {
        type: String,
        require: true
    },
    question15Announcement: {
        type: String,
        require: true
    },
    question16Announcement: {
        type: String,
        require: true
    },
    question17Announcement: {
        type: String,
        require: true
    },
    question18Announcement: {
        type: String,
        require: true
    },
    question19Announcement: {
        type: String,
        require: true
    },
    question20Announcement: {
        type: String,
        require: true
    },
    question21Announcement: {
        type: String,
        require: true
    },
    question22Announcement: {
        type: String,
        require: true
    },
    question23Announcement: {
        type: String,
        require: true
    },
    question24Announcement: {
        type: String,
        require: true
    },
    question25Announcement: {
        type: String,
        require: true
    },
    question26Announcement: {
        type: String,
        require: true
    },
    question27Announcement: {
        type: String,
        require: true
    },
    question28Announcement: {
        type: String,
        require: true
    },
    question29Announcement: {
        type: String,
        require: true
    },
    question30Announcement: {
        type: String,
        require: true
    },
    question31Announcement: {
        type: String,
        require: true
    },
    question32Announcement: {
        type: String,
        require: true
    },
    question33Announcement: {
        type: String,
        require: true
    },
    question34Announcement: {
        type: String,
        require: true
    },
    question35Announcement: {
        type: String,
        require: true
    },
    question36Announcement: {
        type: String,
        require: true
    },
    question37Announcement: {
        type: String,
        require: true
    },
    question38Announcement: {
        type: String,
        require: true
    },
    question39Announcement: {
        type: String,
        require: true
    },
    question40Announcement: {
        type: String,
        require: true
    },
    question41Announcement: {
        type: String,
        require: true
    },
    question42Announcement: {
        type: String,
        require: true
    },
    question43Announcement: {
        type: String,
        require: true
    },
    question44Announcement: {
        type: String,
        require: true
    },
    question45Announcement: {
        type: String,
        require: true
    },
    question46Announcement: {
        type: String,
        require: true
    },
    question47Announcement: {
        type: String,
        require: true
    },
    question48Announcement: {
        type: String,
        require: true
    },
    question49Announcement: {
        type: String,
        require: true
    },
    question50Announcement: {
        type: String,
        require: true
    },
    question51Announcement: {
        type: String,
        require: true
    },
    question52Announcement: {
        type: String,
        require: true
    },
    question53Announcement: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("ScoreForm", ScoreAnnouncementSchema);
