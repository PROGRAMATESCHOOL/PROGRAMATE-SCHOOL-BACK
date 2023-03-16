const PersonServices = require ('../services/PersonServices');
const Announcement = require('../models/announcementsModel');
const bcrypt = require ("bcrypt");

const getAnnouncementList = async (req, res) => {
    try{
        const getAnnouncement = await Announcement.find({});
        res.json(getAnnouncement);
    } catch (err) {
        res.json({ message: err.message});
    }
};

module.exports ={getAnnouncementList};