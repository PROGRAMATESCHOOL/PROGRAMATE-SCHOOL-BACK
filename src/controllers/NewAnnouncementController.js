const Person = require("../models/personsModel");
const personServices = require("../services/PersonServices") ;
const Announcement = require("../models/announcementsModel");

const ObjectId = require("mongoose").ObjectId

const AddAnnouncement = async (req, res) => {
    //const documentPerson = req.params.documentPerson
    const {
        documentPerson,
        nameAnnouncement,
        descriptionAnnouncement,
    } = req.body

    //const adminID = Person.find({ documentPerson: documentPerson }).exec()
    //const adminKey = adminID._id
    //console.log(adminKey)

    console.log(documentPerson)

    //const createdBySuperAdmin = Person.findOne({documentPerson:documentPerson}).select('_id')
    //const ID = createdBySuperAdmin
    //.then(createdBySuperAdmin => console.log(createdBySuperAdmin))
    //console.log(ID)

    const createdBySuperAdmin = Person.findOne({documentPerson: documentPerson}).populate(Person._id)
    console.log(createdBySuperAdmin)

    console.log("Mensaje de Verificacion")

    const NewAnnouncement = new Announcement({
        nameAnnouncement: nameAnnouncement,
        descriptionAnnouncement: descriptionAnnouncement,
        createdBySuperAdmin: "Acá irá la referencia del _id del superadmin"
    })

    // const NewAnnouncement = new Announcement({
    //     nameAnnouncement: nameAnnouncement,
    //     descriptionAnnouncement: descriptionAnnouncement,
    //     createdBySuperAdmin: Person.findOne({documentPerson: documentPerson}).populate(_id)
    //     //createdBySuperAdmin: createdBySuperAdmin
    // })

    NewAnnouncement.save();
    console.log("Convocatoria creada con exito")
    res.send(NewAnnouncement)
}

module.exports = {
    AddAnnouncement
}  