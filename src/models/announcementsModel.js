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
    conditionAnnouncement: { // THIS FIELD LET US ENABLED OR DISABLED THE ANNOUNCEMENT
        type: Boolean,
        default: true,
        require: false
    },
    dateStartAnnouncement: { // FORMAT <YYYY - MM - DD>
        type: Date,
        require: false
    },
    dateFinishAnnouncement: { // FORMAT <YYYY - MM - DD>
        type: Date,
        require: false
    },
    createdBySuperAdmin: {
        type: Schema.Types.ObjectId,
        ref: 'PersonSchema' // Referenced from Document Person (Only One)
    }
})

module.exports = mongoose.model("AnnouncementModel", AnnouncementSchema)

