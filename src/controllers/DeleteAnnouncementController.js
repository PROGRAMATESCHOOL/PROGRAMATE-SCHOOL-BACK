const personServices = require("../services/PersonServices");
const Person = require("../models/personsModel");
const bcrypt = require("bcrypt");
const Announcement = require('../models/announcementsModel');

class deleteAnnouncement{

    async deleteCall(req, res, next) {
      try {
        const callId = req.params.id;
        
        const call = await Announcement.findById(callId);
        if (!call) {
          return res.status(404).json({ message: 'Call not found' });
        }
        
        if (call.creator.toString() !== req.user.id) {
          return res.status(401).json({ message: 'User not authorized' });
        }
        
        await call.remove();
        
        res.json({ message: 'Call deleted' });
      } catch (error) {
        next(error);
      }
    }
  }
//   //class DeleteAnnouncement {
  
//     //async deleteCall(req, res, next) {
//     //  try {
//     //    const callId = req.params.id;
        
//     //    const call = await Announcement.findById(callId);
//         if (!call) {
//           return res.status(404).json({ message: 'Call not found' });
//         }
        
//         if (call.creator.toString() !== req.user.id) {
//           return res.status(401).json({ message: 'User not authorized' });
//         }
        
//         await call.remove();
        
//         res.json({ message: 'Call deleted' });
//       } catch (error) {
//         next(error);
//       }
//     }
//}
  
  module.exports = {deleteAnnouncement};
    