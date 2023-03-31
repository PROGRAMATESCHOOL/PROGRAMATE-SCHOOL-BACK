const Person = require("../models/personsModel");
const bcrypt = require("bcrypt");
const Announcement = require("../models/announcementsModel");

// Function to disabled the announcement
async function deleteAnnouncement(req, res) {
  const { nameAnnouncement } = req.params;
  try {
    const nameAnnouncement = await Announcement.findById({
      where: { id: Announcement._id },
    });
    if (!nameAnnouncement) {
      return res.status(404).json({ message: "Call not found" });
    }
    await nameAnnouncement.destroy();
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while deleting the call",
      errors: error,
    });
  }
}

module.exports = { deleteAnnouncement };
