const { cast } = require('@hapi/joi/lib/base');
const express = require('express');
const Questionary = require("../models/questionaryModel");
const Announcement = require("../models/announcementsModel");
const Person = require("../models/personsModel");


const disableAnnouncement = async (req, res) => {
  const {nameAnnouncement, stateAnnouncement} = req.body
    try{
      const idAnnouncement = Announcement.findOne({nameAnnouncement: nameAnnouncement}, {_id:1}) // Searches for a existing announcement
      
      console.log(idAnnouncement)
      const modAnnouncement = await Announcement.findOneAndUpdate({nameAnnouncement: nameAnnouncement}, {$set: {stateAnnouncement:"DISABLED"}}, {new: true},
      (err, modAnnouncement) => {
        if(err) return res.json({success: false, err});
        res.status(200).json(modAnnouncement)
      })
      console.log(modAnnouncement)

    } catch (err){
       //res.json({message: err.message});
    }
};
 
module.exports = {disableAnnouncement};


