const Person = require("../models/personsModel")
const Questionary = require("../models/questionaryModel")
const Annonuncement = require("../models/announcementsModel")

const StudentStageAnnouncement = async (req, res) => {

    const { idPerson } = req.body

    const studentStage = await Questionary.find({ idStudent: idPerson })
    console.log(studentStage)

    var stageStudent = 0 // FRONT NEEDS THIS VARIABLE BY SHOW INFO ABOUT PROCESS STUDENT

    if (!studentStage) {
        console.log("El porcentaje de avance es de 5%")

        stageStudent = 0.05
        console.log(stageStudent)
        res 
            .status(200)
            .send({data:stageStudent})
    }
    else if (studentStage.stateAnnouncementStudent == "DISABLED") {
            res.send("Está inactivo en esta convocatoria")
        } else if (studentStage) {
            console.log("El porcentaje de avance es de 40%")
            //res.json("El porcentaje de avance es de 40%")

            stageStudent = 0.4
            console.log(stageStudent)
            res
                .status(200)
                .send({data:stageStudent})
        }
            //res.send(stageStudent)
}




module.exports = {
    StudentStageAnnouncement
}