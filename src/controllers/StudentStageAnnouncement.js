const Person = require("../models/personsModel");
const Questionary = require("../models/questionaryModel");
const Annonuncement = require("../models/announcementsModel");

const StudentStageAnnouncement = async (req, res) => {

    const { idPerson } = req.body

    const studentQuestionary = await Questionary.find({})
    console.log(studentQuestionary)

    var stageStudent = 0 // FRONT NEEDS THIS VARIABLE BY SHOW INFO ABOUT PROCESS STUDENT
    
    if (studentQuestionary.idStudent != idPerson) {
        stageStudent = 0.05
        res.send(stageStudent)
    }
    
    if (studentQuestionary.idStudent == idPerson) {
        var statusStudent = studentQuestionary.stateAnnouncementStudent

        if (statusStudent == "ENABLED"){
            stageStudent = 0.4
            res.send(stageStudent)
        }
        else {
            stageStudent = 100
            res.send(stageStudent)
        }
    }
}

module.exports = {
  StudentStageAnnouncement,
};
