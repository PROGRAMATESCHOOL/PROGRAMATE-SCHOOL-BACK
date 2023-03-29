const Questionary = require("../models/questionaryModel")
const Announcement = require("../models/announcementsModel")

const getOneAnnouncement = async (req,res) => {
    const {idPerson} = req.body

    try {
        const oneAnnouncement = await Questionary.findOne({idStudent: idPerson})
        
        if(oneAnnouncement) {
            const idAnnoun = oneAnnouncement.idAnnouncement
            
            const Announ = await Announcement.findOne({_id: idAnnoun})
            const  oneAnnoun = Announ.nameAnnouncement
            res.status(200).json(oneAnnoun)
        }
        else {
            const nameAnnoun = "No estás aplicando a ninguna convocatoria. Aplica ahora mismo"
            res.status(200).json(nameAnnoun)
        }
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = {
    getOneAnnouncement
}