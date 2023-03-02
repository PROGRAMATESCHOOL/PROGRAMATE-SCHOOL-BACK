const personServices = require("../services/PersonServices");
const ScoreForm = require("../models/scoreAnnouncementModel");
const bcrypt = require("bcrypt");
const Person = require("../models/personsModel");

const scoreForm = async(req, res) => {
    const {
        ScoreProfile,
        ScoreVocation,
        ScoreMotivation,
        ScoreLogic,
        ScoreTotal
    } = req.body;

    const scoreform = new ScoreForm ({
        ScoreProfile: ScoreProfile,
        ScoreVocation: ScoreVocation,
        ScoreMotivation: ScoreMotivation,
        ScoreLogic: ScoreLogic,
        ScoreTotal: ScoreTotal
    })

    scoreform.save()
        .then(result => console.log("Score Saved"))
}

module.exports = {
    scoreForm
}