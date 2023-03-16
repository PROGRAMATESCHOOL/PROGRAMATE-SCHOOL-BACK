const Person = require("../models/personsModel");
const personServices = require("../services/PersonServices") ;
const Announcement = require("../models/announcementsModel");

const { ObjectId }= require("mongoose");

const AddAnnouncement = async (req, res) => {
    
    const {
        documentPerson,
        nameAnnouncement,
        descriptionAnnouncement,
        placesAnnouncement,
        dateStartAnnouncement,
        dateFinishAnnouncement
    } = req.body

    

    console.log(documentPerson)

    const createdBySuperAdmin = await Person.findOne({documentPerson: documentPerson}, {_id: 1})
    console.log(createdBySuperAdmin)

    console.log("Mensaje de Verificacion")

    const NewAnnouncement = new Announcement({
        nameAnnouncement: nameAnnouncement,
        descriptionAnnouncement: descriptionAnnouncement,
        placesAnnouncement: placesAnnouncement,
        conditionAnnouncement: true,
        dateStartAnnouncement: dateStartAnnouncement,
        dateFinishAnnouncement: dateFinishAnnouncement,
        createdBySuperAdmin: createdBySuperAdmin
    })

    NewAnnouncement.save();
    console.log("Convocatoria creada con exito")
    res.send(NewAnnouncement)
}

module.exports = {
    AddAnnouncement
}  
