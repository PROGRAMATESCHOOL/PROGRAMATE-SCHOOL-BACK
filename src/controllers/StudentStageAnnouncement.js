const Person = require("../models/personsModel")
const Questionary = require("../models/questionaryModel")

const StudentStageAnnouncement = async (req, res) => {
    
    //THE NEST VARIABLE MUST BE TO OBTAIN FROM COOKIES
    const documentPerson = "99901" //THIS IS PROVISIONAL
    
    const studentID = await Person.findOne({documentPerson: documentPerson}, {_id:1})
    //console.log(studentID)
    //res.json(studentID)

    const studentStage = await Questionary.findOne({idStudent: studentID}, {_id:1})
    //console.log(studentStage)
    //res.json(studentStage)

    var stageStudent = 0.0 // FRONT NEEDS THIS VARIABLE BY SHOW INFO ABOUT PROCESS STUDENT

    if(!studentStage) {
        console.log("El pordentaje de avance es de 20%")
        //res.json("El pordentaje de avance es de 20%")

        var stageStudent = 0.2
        console.log(stageStudent)
        res.json(stageStudent)
    }
    else {
        console.log("El porcentaje de avance es de 60%")
        //res.json("El porcentaje de avance es de 60%")

        var stageStudent = 0.6
        console.log(stageStudent)
        res.json(stageStudent)
    }
}

module.exports = {
    StudentStageAnnouncement
}