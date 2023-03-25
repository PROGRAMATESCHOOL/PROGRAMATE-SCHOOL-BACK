const Questionary = require("../models/questionaryModel");
const Announcement = require("../models/announcementsModel");

const getOneAnnouncement = async (req, res) => {
  const { idPerson } = req.body;

  try {
    const oneAnnouncement = await Questionary.findOne({ idStudent: idPerson });

    var oneAnnoun;

    if (oneAnnouncement) {
      const idAnnoun = oneAnnouncement.idAnnouncement;

      const Announ = await Announcement.findOne({ _id: idAnnoun });
      oneAnnoun = Announ.nameAnnouncement;
      res.status(200).json(oneAnnoun);
    } else {
      nameAnnoun =
        "No está aplicando a niguna convocatoria. Aplica ahora mismo";
      res
        .status(200)
        .json("No está aplicando a niguna convocatoria. Aplica ahora mismo");
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getOneAnnouncement,
};
