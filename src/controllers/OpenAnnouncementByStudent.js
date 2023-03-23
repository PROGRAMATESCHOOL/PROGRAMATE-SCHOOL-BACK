const Person = require("../models/personsModel")
const Questionary = require("../models/questionaryModel")
const Announcement = require("../models/announcementsModel")

const OpenAnnouncement = async (req, res) => {
    
    // THIS  VARIABLE MUST COME FROM TOKEN OR COOKIES
    const {idPerson} = req.body

    //const idStu = await Person.findOne({documentPerson: documentPerson}, {_id:1}).exec()

    const AllAnnouncements = await Announcement.find({ $or: [  {studentsRegistered: { $nin: [idPerson] }} , {studentsRegistered: {$exists: false} } ]  })

    if(AllAnnouncements){
        res.json(AllAnnouncements)
    } else {
        res.json("No hay convocatorias disponibles Ahora")
    }
}
    
module.exports = {
    OpenAnnouncement
}