const Person = require("../models/personsModel")
const Questionary = require("../models/questionaryModel")
const Announcement = require("../models/announcementsModel")

const OpenAnnouncement = async (req, res) => {
    
    // THIS  VARIABLE MUST COME FROM TOKEN OR COOKIES
    const documentPerson = "99901"
    
    const idStu = await Person.findOne({documentPerson: documentPerson}, {_id:1}).exec()

    const AllAnnouncements = await Announcement.find({studentsRegistered: {$nin:[idStu]}}).exec()

    if(AllAnnouncements){
        res.json(AllAnnouncements)
    } else {
        res.json("No hay convocatorias disponibles Ahora")
    }
}
    
module.exports = {
    OpenAnnouncement
}