const Announcement = require('../models/announcementsModel');
const bcrypt = require ("bcrypt");

//Get all announcements registered in the database
const getAnnouncementList = (req, res) => {
    Announcement.find((err, result) => {
        if (err) throw new Error(err);
        res.json(result);
        console.log(result);
    });
}

module.exports ={
    getAnnouncementList,
};