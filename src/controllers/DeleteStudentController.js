const { cast } = require("@hapi/joi/lib/base");
const express = require("express");

const Questionary = require("../models/questionaryModel");
const Announcement = require("../models/announcementsModel");
const Person = require("../models/personsModel");

const modifyStudent = async (req, res) => {
<<<<<<< HEAD
    const { documentPerson } = req.body;
    try {
        const QueS = await Questionary.findOne(
            { q9_documentPerson: documentPerson },
            { _id: 1 }
        );

        const ModStudent = await Questionary.findOneAndUpdate(
            { q9_documentPerson: documentPerson },
            { $set: { stateAnnouncementStudent: "DISABLED" } },
            { new: true },
            (err, ModStudent) => {
                if (err) return res.json({ success: false, err });
                res.status(200).json(ModStudent);
            }
        );
    } catch (err) {
        //res.json({message: err.message});
    }
=======
  const { documentPerson } = req.body;
  try {
    const QueS = await Questionary.findOne(
      { q9_documentPerson: documentPerson },
      { _id: 1 }
    );

    const ModStudent = await Questionary.findOneAndUpdate(
      { q9_documentPerson: documentPerson },
      { $set: { stateAnnouncementStudent: "DISABLED" } },
      { new: true },
      (err, ModStudent) => {
        if (err) return res.json({ success: false, err });
        res.status(200).json(ModStudent);
      }
    );
  } catch (err) {
    //res.json({message: err.message});
  }
>>>>>>> 1d62b190014f8c9e6348b2331eddb8d5a3d62ee6
};

module.exports = { modifyStudent };
