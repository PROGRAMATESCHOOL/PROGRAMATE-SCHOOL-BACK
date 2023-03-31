const express = require("express");
const Questionary = require("../models/questionaryModel");
const Announcement = require("../models/announcementsModel");
const Person = require("../models/personsModel");

const editAnnouncement = async (req, res) => {
  const { nameAnnouncement } = req.body;

    try {
        const Announ = await Announcement.findOneAndUpdate(
            {nameAnnouncement: nameAnnouncement},
            {
                $set: {
                    descriptionAnnouncement: descriptionAnnouncement,
                    placesAnnouncement: placesAnnouncement,
                    dateStartAnnouncement: dateStartAnnouncement,
                    dateFinishAnnouncement: dateFinishAnnouncement
                }
            },
            {new: true}
        )
    } catch (err){
        res.json({ message: err.message })
    }
}

module.exports = { editAnnouncement };
