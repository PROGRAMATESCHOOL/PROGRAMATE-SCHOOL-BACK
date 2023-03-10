const mongoose = require("mongoose");

const ScoreAnnouncementSchema = new mongoose.Schema({
  // idAnnouncement: {
  //     type: String,
  //     // Referenced from announcementModel
  // },
  // nameAnnouncement: {
  //     type: String,
  //     // Referenced from announcementModel
  // },
  // idStudent: {
  //     type: String,
  //     // Referenced from personModel
  // },
  // nameStudent: {
  //     type: String,
  //     // Referenced from personModel
  // },
  ScoreProfile: {
    type: Number,
    require: false,
  },
  ScoreVocation: {
    type: Number,
    require: false,
  },
  ScoreMotivation: {
    type: Number,
    require: false,
  },
  ScoreLogic: {
    type: Number,
    require: false,
  },
  ScoreTotal: {
    type: Number,
    require: false,
  },
});

module.exports = mongoose.model("ScoreForm", ScoreAnnouncementSchema);
