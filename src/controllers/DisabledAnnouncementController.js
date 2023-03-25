const { cast } = require("@hapi/joi/lib/base");
const express = require("express");
const Questionary = require("../models/questionaryModel");
const Announcement = require("../models/announcementsModel");
const Person = require("../models/personsModel");

const disableAnnouncement = async (req, res) => {
  const { nameAnnouncement } = req.body;
  try {
    //const idAnnouncement = Announcement.findOne({ nameAnnouncement: nameAnnouncement }, { _id: 1 }) // Searches for a existing announcement
    const STA = await Announcement.findOne({
      nameAnnouncement: nameAnnouncement,
    });
    const StateA = STA.stateAnnouncement;

    if (StateA == "ENABLED") {
      const modAnnouncement = await Announcement.findOneAndUpdate(
        { nameAnnouncement: nameAnnouncement },
        { $set: { stateAnnouncement: "DISABLED" } },
        { new: true },
        (err, modAnnouncement) => {
          if (err) return res.json({ success: false, err });
          res.status(200).json(modAnnouncement);
        }
      );
    }
    if (StateA == "DISABLED") {
      const modAnnouncement = await Announcement.findOneAndUpdate(
        { nameAnnouncement: nameAnnouncement },
        { $set: { stateAnnouncement: "ENABLED" } },
        { new: true },
        (err, modAnnouncement) => {
          if (err) return res.json({ success: false, err });
          res.status(200).json(modAnnouncement);
        }
      );
    }
  } catch (err) {
    //res.json({message: err.message});
  }
};

module.exports = { disableAnnouncement };
