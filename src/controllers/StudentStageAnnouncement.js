const Person = require("../models/personsModel")
const Questionary = require("../models/questionaryModel")
const Annonuncement = require("../models/announcementsModel")

const StudentStageAnnouncement = async (req, res) => {

    const { idPerson } = req.body

    const studentTrue = await Questionary.find({ idStudent: idPerson }, {_id:1})
    console.log(studentTrue)

    const studentEnabled = await Questionary.find({ idStudent: idPerson }, {stateAnnouncementStudent:1})
    console.log(studentEnabled)
    
    var stageStudent = 0 // FRONT NEEDS THIS VARIABLE BY SHOW INFO ABOUT PROCESS STUDENT

    if ((!studentTrue) || (!studentEnabled)) {
        console.log("El porcentaje de avance es de 5%")
        stageStudent = 0.05
        console.log(0.05)
        res 
            .status(200)
            .send({data:stageStudent})
    }
    if (studentTrue && (studentEnabled == "DISABLED")) {
        console.log("El porcentaje de avance es de 5%")
        // res.send("Está inactivo en esta convocatoria")
        stageStudent = 0.05
        console.log(0.05)
        res
            .status(200)
            .send({data:stageStudent})
    }
    else if (studentTrue && (studentEnabled == "ENABLED")) {
        console.log("El porcentaje de avance es de 40%")
        //res.json("El porcentaje de avance es de 40%")
        stageStudent = 0.4
        console.log(0.4)
        res
            .status(200)
            .send({data:stageStudent})
    }
            //res.send(stageStudent)
}

module.exports = {
    StudentStageAnnouncement
}