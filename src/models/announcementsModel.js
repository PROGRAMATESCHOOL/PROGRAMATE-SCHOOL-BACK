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
    students: [{
        type: Schema.Types.ObjectId,
        ref: 'PersonSchema' // Referenced from Document Person (One or Many)
    }],
    conditionStudent: {
        type: Boolean,
        require: false
    },
    dateStartAnnouncement: {
        type: Date,
        require: false
    },
    dateFinishAnnouncement: {
        type: Date,
        require: false
    },
    createdBySuperAdmin: {
        type: Schema.Types.ObjectId,
        ref: 'PersonSchema' // Referenced from Document Person (Only One)
    }
})

// AnnouncementSchema.set("toJSON", {
//     transform: (document, returnedObject) => {
//         returnedObject.id = returnedObject._id;
//         delete returnedObject._id;
//         delete returnedObject.__v
//     }
// })

module.exports = mongoose.model("AnnouncementModel", AnnouncementSchema)
