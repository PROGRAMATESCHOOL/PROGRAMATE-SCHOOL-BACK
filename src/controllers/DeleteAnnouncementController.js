const Announcement = require("../models/announcementsModel");

// Function to disabled the announcement
async function deleteAnnouncement(req, res) {
  const { nameAnnouncement } = req.params;
  try {
    const Announcementbydelete = await Announcement.findOne({
      nameAnnouncement: nameAnnouncement,
    }).exec();
    console.log(Announcementbydelete);
    if (!Announcementbydelete) {
      return res.status(404).json({ message: "Call not found" });
    } else {
      await Announcementbydelete.delete();
      return res.status(200).send({ message: "Deleted successfully" });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "An error occurred while deleting the call" });
  }
}

module.exports = { deleteAnnouncement };
