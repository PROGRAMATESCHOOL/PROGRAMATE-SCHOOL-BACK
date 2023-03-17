const Person = require("../models/personsModel");
const personServices = require("../services/PersonServices") ;
const Announcement = require("../models/announcementsModel");
const express = require('express');

const { ObjectId }= require("mongoose");

const AddAnnouncement = async (req, res) => {
    
    const {
        documentPerson,
        nameAnnouncement,
        descriptionAnnouncement,
    } = req.body


    const createdBySuperAdmin = await Person.findOne({documentPerson: documentPerson}, {_id: 1})
    console.log(createdBySuperAdmin)

    console.log("Mensaje de Verificacion")

    const NewAnnouncement = new Announcement({
        nameAnnouncement: nameAnnouncement,
        descriptionAnnouncement: descriptionAnnouncement,
        createdBySuperAdmin: createdBySuperAdmin
    })

    NewAnnouncement.save();
    console.log("Convocatoria creada con exito")
    res.send(NewAnnouncement)
};





module.exports = {
    AddAnnouncement,
}  
