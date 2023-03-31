const express = require("express");
const Questionary = require("../models/questionaryModel");
const Announcement = require("../models/announcementsModel");
const Person = require("../models/personsModel");

const editAnnouncement = async (req, res) => {
  const { nameAnnouncement } = req.body;

<<<<<<< HEAD
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
=======
  try {
    const Announ = await Announcement.findOneAndUpdate(
      { nameAnnouncement: nameAnnouncement },
      {
        $set: {
          descriptionAnnouncement: descriptionAnnouncement,
          placesAnnouncement: placesAnnouncement,
          dateStartAnnouncement: dateStartAnnouncement,
          dateFinishAnnouncement: dateFinishAnnouncement,
        },
      },
      { new: true }
    );
  } catch (err) {
    res.json({ message: err.message });
  }
};
>>>>>>> 1d62b190014f8c9e6348b2331eddb8d5a3d62ee6

module.exports = { editAnnouncement };
