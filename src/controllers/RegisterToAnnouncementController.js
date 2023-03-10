const personServices = require("../services/PersonServices");
const Person = require("../models/personsModel");
const Announcement = require("../models/announcementsModel");
const Questionary = require("../models/questionaryModel");

const RegisterToAnnouncement = async (req, res) => {
    const {
        documentPerson,
        nameAnnouncement
    } = req.body

    const StudentRegistered = await Person.findOne({documentPerson}).exec()
    //res.send(StudentRegistered)
    //console.log(StudentRegistered)

    // THIS VARIABLES SHOW INFORMATION IN FRONT'S VIEW
    let form_name1Person = StudentRegistered.name1Person
    let form_name2Person = StudentRegistered.name2Person
    let form_lastname1Person = StudentRegistered.lastname1Person
    let form_lastname2Person = StudentRegistered.lastname2Person
    let form_documentPerson = StudentRegistered.documentPerson
    let form_emailPerson = StudentRegistered.emailPerson
    let form_institutionPerson = StudentRegistered.institutionPerson
    let form_agePerson = StudentRegistered.agePerson

    const {
        birthdate,
        gender,
        document,
        course,
        sena,
        availability,
        phone
    } = req.body

    const idAnn = await Announcement.findOne({nameAnnouncement: nameAnnouncement}, {_id:1})
    //console.log(idAnn)

    const idStu = await Person.findOne({documentPerson: documentPerson}, {_id:1})
    //console.log(idStu)
    
    const NewQuestionaryOK = new Questionary({
        idAnnouncement: idAnn,
        idStudent: idStu,
        q1_name1Person: form_name1Person, 
        q2_name2Person: form_name2Person,
        q3_lastname1Person: form_lastname1Person,
        q4_lastname2Person: form_lastname2Person,
        q5_birthdate: birthdate,
        q6_agePerson: form_agePerson,
        q7_gender: gender,
        q8_document: document,
        q9_documentPerson: form_documentPerson,
        q10_institutionPerson: form_institutionPerson,
        q11_course: course,
        q12_sena: sena,
        q13_availability: availability,
        q14_emailPerson: form_emailPerson,
        q15_phone: phone 
    })

    NewQuestionaryOK.save();
    console.log("Se ha registrado a la convocatoria con exito")
    res.send(NewQuestionaryOK)

    // THE NEXT CALCULATES SCORES BY THE STUDENT
    var form_ScoreProfile = 0
    var form_ScoreVocation = 0
    var form_ScoreMotivation = 0
    var form_ScoreLogic = 0
    var form_ScoreTotal = 0
    var form_statusAnnouncement = "ABLED"

    if (NewQuestionaryOK.q11_course == "11") {
        form_ScoreProfile += 1
    }
    if (NewQuestionaryOK.q12_sena == "NO") {
        form_ScoreProfile += 1
    } else {
            form_statusAnnouncement = "DISABLED"
        }
    if (NewQuestionaryOK.q13_availability == "SI") {
        form_ScoreProfile += 1
    }

    console.log(form_ScoreProfile)
}

module.exports = {
    RegisterToAnnouncement
}