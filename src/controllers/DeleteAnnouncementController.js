const Announcement = require('../models/announcementsModel');

const deleteAnnouncement = async (req, res) => {
  const { nameAnnouncement } = req.body;
  try {
  const Announcementbydelete = await Announcement.findOne({nameAnnouncement:nameAnnouncement}).exec();
//const AnnouncementID = await Announcement.findOne({nameAnnouncement:nameAnnouncement},{_id:1});
  console.log(Announcementbydelete)
//    const nameAnnouncement = await Announcement.findOne({where: {id: Announcement._id}});
    if (!Announcementbydelete) {
      return res.status(404).json({ message: 'Call not found' }); 
    }
    else{
    await Announcementbydelete.delete(); 
    return res.status(200).send({message:'Deleted successfully'}); 
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'An error occurred while deleting the call' }); 
  }
}
  
 module.exports = {deleteAnnouncement};
