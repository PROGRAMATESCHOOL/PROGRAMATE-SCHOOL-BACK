const Person = require("../models/personsModel");
const Questionary = require("../models/questionaryModel");
const Annonuncement = require("../models/announcementsModel");

const StudentStageAnnouncement = async (req, res) => {
  const { idPerson } = req.body;

  const studentID = await Person.findOne({ _id: idPerson }, { _id: 1 });

  const studentStage = await Questionary.findOne(
    { idStudent: studentID },
    { _id: 1, stateAnnouncementStudent: 1 }
  );

  var stageStudent = 0.0; // FRONT NEEDS THIS VARIABLE BY SHOW INFO ABOUT PROCESS STUDENT

  if (!studentStage) {
    var stageStudent = 0.05;
    res.status(200).send({ data: stageStudent });
  } else {
    if (studentStage.stateAnnouncementStudent == "DISABLED") {
      res.send("Está inactivo en esta convocatoria");
    } else {
      var stageStudent = 0.4;
      res.status(200).send({ data: stageStudent });
    }
  }

  //res.send(stageStudent)
};

module.exports = {
  StudentStageAnnouncement,
};
