const Person = require("../models/personsModel")
const Questionary = require("../models/questionaryModel")
const Announcement = require("../models/announcementsModel")

const OpenAnnouncement = async (req, res) => {
    
    // THIS  VARIABLE MUST COME FROM TOKEN OR COOKIES
    const {_id} = req.body

    //const idStu = await Person.findOne({documentPerson: documentPerson}, {_id:1}).exec()

    const AllAnnouncements = await Announcement.find({studentsRegistered: {$nin:[_id]}}).exec()

    if(AllAnnouncements){
        res.json(AllAnnouncements)
    } else {
        res.json("No hay convocatorias disponibles Ahora")
    }
}
    
module.exports = {
    OpenAnnouncement
}