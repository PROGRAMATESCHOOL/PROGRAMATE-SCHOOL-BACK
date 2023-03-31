<<<<<<< HEAD
const Questionary = require("../models/questionaryModel")
=======
const Questionary = require("../models/questionaryModel");
>>>>>>> 1d62b190014f8c9e6348b2331eddb8d5a3d62ee6

const getQuestionaryByStudent = async (req, res) => {
  const { idPerson } = req.body;

<<<<<<< HEAD
    try {
        const oneQueStu = await Questionary.findOne({ idStudent: idPerson })
            res.status(200).json(oneQueStu)
    } catch (errr) {
        res.status(500).json({ message: err.message })
    }
}
=======
  try {
    const oneQueStu = await Questionary.findOne({ idStudent: idPerson });
    res.status(200).json(oneQueStu);
  } catch (errr) {
    res.status(500).json({ message: err.message });
  }
};
>>>>>>> 1d62b190014f8c9e6348b2331eddb8d5a3d62ee6

module.exports = { getQuestionaryByStudent };
