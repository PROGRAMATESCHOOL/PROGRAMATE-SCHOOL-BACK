const mongoose = require("mongoose");
const  { Schema, ObjectId, model } = require("mongoose")

const QuestionarySchema = new mongoose.Schema({
    idAnnouncement: {
        type: Schema.Types.ObjectId,
        ref: 'AnnouncementSchema' // Referenced from announcementModel
    },
    idStudent: {
        type: Schema.Types.ObjectId,
        ref: 'PersonSchema' // Referenced from personModel
    },
    q1_name1Person: {
        type: String,
        require: true
    },
    q2_name2Person: {
        type: String,
        require: false
    },
    q3_lastname1Person: {
        type: String,
        require: true
    },
    q4_lastname2Person: {
        type: String,
        require: false
    },
    q5_birthdate: {
        type: String,
        require: true
    },
    q6_agePerson: {
        type: String,
        require: true
    },
    q7_gender: {
        type: String,
        require: true
    },
    q8_document: {
        type: String,
        require: true
    },
    q9_documentPerson: {
        type: String,
        require: true
    },
    q10_institutionPerson: {
        type: String,
        require: true
    },
    q11_course: {
        type: String,
        require: false
    },
    q12_sena: {
        type: String,
        require: false
    },
    q13_availability: {
        type: String,
        require: false
    },
    q14_emailPerson: {
        type: String,
        require: false
    }, 
    q15_phone: {
        type: Number,
        require: false
    },
    q16_phoneTwo: {
        type: Number,
        require: false
    },
    q17_sisben: {
        type: String,
        require: false
    },
    q18_ethnicGroup: {
        type: String,
        require: false
    },
    q19_nationality: {
        type: String,
        require: false
    },
    q20_disability: {
        type: String,
        require: false
    },
    q21_typeDisability: {
        type: String,
        require: false
    },
    q22_addressStudent: {
        type: String,
        require: false
    },
    q23_departmentStudent: {
        type: String,
        require: false
    },
    q24_rural: {
        type: String,
        require: false
    },
    q25_bogota: {
        type: String,
        require: false
    },
    q26_stratum: {
        type: Number,
        require: false
    },
    q27_nameGuardian: {
        type: String,
        require: false
    },
    q28_relationship: {
        type: String,
        require: false
    },
    q28_1_relationshipO:{
        type: String,
        require: false
    },
    q29_documentTypeGuardian: {
        type: String,
        require: false
    },
    q30_numberIdGuardian: {
        type: String,
        require: false
    },
    q31_emailGuardian: {
        type: String,
        require: false
    },
    q32_phoneGuardian: {
        type: Number,
        require: false
    },
    q33_phoneGuardianTwo: {
        type: Number,
        require: false
    },
    q34_addressGuardian: {
        type: String,
        require: false
    },
    q35_departmentGuardian: {
        type: String,
        require: false
    },
    q36_educationLevelGuardian: {
        type: String,
        require: false
    },
    q37_economic: {
        type: String,
        require: false
    },
    q38_family: {
        type: String,
        require: false
    },
    q39_computer: {
        type: String,
        require: false
    },
    q40_internet: {
        type: String,
        require: false
    },
    q41_interests: {
        type: String,
        require: false
    },
    q42_activity: {
        type: String,
        require: false
    },
    q43_reportage: {
        type: String,
        require: false
    },
    q44_stake: {
        type: String,
        require: false
    },
    q45_webMotivation: {
        type: String,
        require: false
    },
    q46_why: {
        type: String,
        require: false
    },
    q47_methodology: {
        type: String,
        require: false
    },
    q48_want: {
        type: String,
        require: false
    },
    q49_withdrawal: {
        type: String,
        require: false
    },
    q50_logic1: {
    type: String,
    require: false
    },
    q51_logic2: {
        type: String,
        require: false
    },
    q52_logic3: {
        type: String,
        require: false
    },
    q53_logic4: {
        type: String,
        require: false
    },
    ScoreProfile: {
        type: Number,
        require: false
    },
    ScoreVocation: {
        type: Number,
        require: false
    },
    ScoreMotivation: {
        type: Number,
        require: false
    },
    ScoreLogic: {
        type: Number,
        require: false
    },
    ScoreTotal: {
        type: Number,
        require: false
    },
    stateAnnouncementStudent: { // THIS FIELD LET US CHANGE THE STATE OF STUDENT (ENABLED OR DISABLED)
        type: String,
        require: false
    }
})

module.exports = mongoose.model("questionaryModel", QuestionarySchema);
