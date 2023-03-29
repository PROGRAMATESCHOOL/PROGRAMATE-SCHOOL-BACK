const mongoose = require("mongoose");

const  { Schema, ObjectId, model } = require("mongoose")

const AnnouncementSchema = new mongoose.Schema({
    nameAnnouncement: {
        type: String,
        require: true
    },
    descriptionAnnouncement: {
        type: String,
        require: true
    },
    placesAnnouncement: {
        type: Number,
        require: true
    },
    stateAnnouncement: { // THIS FIELD LET US ENABLED OR DISABLED THE ANNOUNCEMENT
        type: String,
        default: "ENABLED",
        require: false
    },
    dateStartAnnouncement: { // FORMAT <YYYY - MM - DD>
        type: String,
        require: false
    },
    dateFinishAnnouncement: { // FORMAT <YYYY - MM - DD>
        type: String,
        require: false
    },
    createdBySuperAdmin: {
        type: Schema.Types.ObjectId,
        ref: 'PersonSchema' // Referenced from Document Person (Only One)
    },
    studentsRegistered: {
        type: Schema.Types.ObjectId,
        ref: 'PersonSchema'
    }
})

module.exports = mongoose.model("AnnouncementModel", AnnouncementSchema)

