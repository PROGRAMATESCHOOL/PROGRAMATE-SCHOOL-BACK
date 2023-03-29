const Person = require("../models/personsModel")
const Questionary = require("../models/questionaryModel")
const Announcement = require("../models/announcementsModel")

const OpenAnnouncement = async (req, res) => {
    
    // THIS  VARIABLE MUST COME FROM TOKEN OR COOKIES
    const { idPerson } = req.body

    const idStudent = await Person.findOne({_id: idPerson}, {_id:1}).exec()
    console.log(idStudent)

    if (idStudent) {

        const AllAnnouncements = await Announcement.find( {$or: [ {studentsRegistered: { $nin: [idStudent] }}, {studentsRegistered: { $exists: false}}]})
        console.log(AllAnnouncements)

        if(!AllAnnouncements){
            res.status(200)
            res.send("IN PROCESS")
        }
        if(AllAnnouncements){
            res.status(200)
            res.send("OPEN")
        } 
        else {
            res.status(201)
            res.send("No hay convocatorias disponibles Ahora")
        }
    }
    if(!idStudent) {
        res.send("ESTUDIANTE NO ENCONTRADO")
    }
}
    
module.exports = {
    OpenAnnouncement
}