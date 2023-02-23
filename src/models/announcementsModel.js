const mongoose = require("mongoose");

const AnnouncementSchema = new mongoose.Schema({
    // AnnouncementID: Its generated by MongoDB
    // We can generate an ID with a extension: uuid or another

    nameAnnouncement: {
        type: String,
        require: true
    }
    descriptionAnnouncement: {
        type: String,
        require: true
    }
    
    students: {
        type: String,
        require: true
        // Referenced from Document Person (One or Many)
    }
    conditionStudent: {
        type: Boolean,
        require: true
    }
    createdBySuperAdmin: {
        type: String,
        require: true
        // Referenced from Document Person (Only One)
    }

})

module.exports = mongoose.model("AnnouncementModel", AnnouncementSchema)