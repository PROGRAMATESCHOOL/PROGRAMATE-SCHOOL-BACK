const personServices = require("../services/PersonServices");
const Score = require("../models/scoreAnnouncementModel");
const bcrypt = require("bcrypt");
const Person = require("../models/personsModel");
const Questionary = require("../models/questionaryModel");
const Announcement = require("../models/announcementsModel");

const scoreForm = async (req, res) => {
  const {
    documentPerson,
    nameAnnouncement, // This field will be export to the object ScoreForm
  } = req.body

    const StundentReg = await Person.findOne({ documentPerson }).exec();

    const AnnouncementReg = await Announcement.findOne({nameAnnouncement}).exec();

    const StudentQuestionary = await Questionary.findOne({ documentPerson }).exec();

    const idAnnouncement = AnnouncementReg._id
    // constt nameannouncement = already exist
    const idStudent = StundentReg._id
    const name1Student = StundentReg.name1Person
    const lastname1Student = StundentReg.lastname1Person
    const ScoreProfile = StudentQuestionary.form_ScoreProfile
    const ScoreVocation = StudentQuestionary.form_ScoreVocation
    const ScoreMotivation = StudentQuestionary.form_ScoreMotivation
    const ScoreLogic = StudentQuestionary.form_ScoreLogic
    const ScoreTotal = StudentQuestionary.form_ScoreTotal
    const stateAnnouncementStudent = StudentQuestionary.form_stateAnnouncementStudent

    const NewScoreStudent = new Score({
      idAnnouncement: idAnnouncement,
      nameAnnouncement: nameAnnouncement,
      idStudent: idStudent,
      name1Student: name1Student,
      lastname1Student: lastname1Student,
      ScoreProfile: ScoreProfile,
      ScoreVocation: ScoreVocation,
      ScoreMotivation: ScoreMotivation,
      ScoreLogic: ScoreLogic,
      ScoreTotal: ScoreTotal,
      stateAnnouncementStudent: stateAnnouncementStudent
    });

    NewScoreStudent.save()
    console.log("Registro de puntajes exitoso")
    res.send(NewScoreStudent)
};

module.exports = {
  scoreForm,
};
