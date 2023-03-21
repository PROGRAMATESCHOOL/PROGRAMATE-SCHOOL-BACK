const express = require('express');
const Announcement = require('../models/announcementsModel');
//const { ObjectId }= require("mongoose")


const disableAnnouncement = async (req, res) => {

  const {
    nameAnnouncement,
    stateAnnouncement
  } = req.body
  try{
    const idAnnouncement = Announcement.findOne({nameAnnouncement}, {_id:1}) // Searches for a existing announcement
    const modAnnouncement = await Announcement.findOneAndUpdate({idAnnouncement: idAnnouncement}, {stateAnnouncement: "DISABLED"}, {new: "ENABLED"}) //Update the state of the announcement
    res.send(modAnnouncement)

    const updateAnnouncement =  Announcement({
      nameAnnouncement: nameAnnouncement,
      stateAnnouncement: stateAnnouncement
    })

    updateAnnouncement.save();
    console.log("Convocatoria deshabilitada")
    res.send(updateAnnouncement)
  } catch (err){
     //res.json({message: err.message});
  }
};

module.exports = {
  disableAnnouncement
};


