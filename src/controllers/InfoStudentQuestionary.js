const Questionary = require("../models/questionaryModel");

const getQuestionaryByStudent = async (req, res) => {
  const { idPerson } = req.body;

  try {
    const oneQueStu = await Questionary.findOne({ idStudent: idPerson });
    res.status(200).json(oneQueStu);
  } catch (errr) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getQuestionaryByStudent };
