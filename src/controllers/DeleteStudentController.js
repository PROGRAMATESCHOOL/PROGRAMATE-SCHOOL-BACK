const { cast } = require('@hapi/joi/lib/base');
const express = require('express');
const Questionary = require("../models/questionaryModel");
const Announcement = require("../models/announcementsModel");
const Person = require("../models/personsModel");


const modifyStudent = async (req, res) => {
    const {documentPerson} = req.body
        const idStudent = await Person.findOne({documentPerson: documentPerson}, {_id:1})
        
        console.log (idStudent)
        const QueS = await Questionary.findOne({idStudent:idStudent}, {_id:1})

        console.log(QueS)
        Questionary.findOneAndUpdate({_id:QueS}, {$set: {stateAnnouncementStudent: "DISABLED"}})
}

module.exports = {modifyStudent};