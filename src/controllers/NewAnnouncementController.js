const Person = require("../models/personsModel");
const personServices = require("../services/PersonServices") ;
const Announcement = require("../models/announcementsModel");
const express = require('express');

const { ObjectId }= require("mongoose");

const AddAnnouncement = async (req, res) => {
    
    const {
        //documentPerson,
        nameAnnouncement,
        descriptionAnnouncement,
        placesAnnouncement,
        dateStartAnnouncement,
        dateFinishAnnouncement
    } = req.body

    const documentPerson = "10001" // THIS IS PROVISIONAL. THIS FIELD MUST BE BRING IT FROM FRONTEND    

    const createdBySuperAdmin = await Person.findOne({documentPerson: documentPerson}, {_id: 1}) //searches for an existing user with the type profile and same document
    console.log(createdBySuperAdmin)

    console.log("Mensaje de Verificacion")

    const NewAnnouncement = new Announcement({
        nameAnnouncement: nameAnnouncement,
        descriptionAnnouncement: descriptionAnnouncement,
        placesAnnouncement: placesAnnouncement,
        stateAnnouncement: "ENABLED",
        dateStartAnnouncement: dateStartAnnouncement,
        dateFinishAnnouncement: dateFinishAnnouncement,
        createdBySuperAdmin: createdBySuperAdmin
    })

    NewAnnouncement.save();
    console.log("Convocatoria creada con exito")
    res.send(NewAnnouncement)
};

module.exports = {
    AddAnnouncement,
}