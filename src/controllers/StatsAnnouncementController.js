const Questionary = require("../models/questionaryModel");

const StatsAnnouncements = async (req, res) => {
    let counterAnnouncement = await Questionary.find({}).count(); // THIS COUNTER SAVES THE TOTAL OF ANNOUNCEMENTS

    //res.send(counterAnnouncement)

    let counterGenderF = await Questionary.find({
        q7_gender: "Femenino",
    }).count(); // THIS COUNTER SAVES THE TOTAL OF WOMAN REGISTERED IN ANY ANNOUNCEMENT

    //res.send(counterGenderF)

    let counterGenderM = await Questionary.find({
        q7_gender: "Masculino",
    }).count(); // THIS COUNTER SAVES THE TOTAL OF MAN REGISTERED IN ANY ANNOUNCEMENT
    //res.send(counterGenderM)

    let percentGenderF = counterGenderF / counterAnnouncement;
    //res.json(percentGenderF)

    let percentGenderM = counterGenderM / counterAnnouncement;
    //res.json(percentGenderM)

    let counterStratum1 = await Questionary.find({ q26_stratum: 1 }).count(); // THIS COUNTER SAVES THE TOTAL REGISTERS BY STRATUM 1 IN ANY ANNOUNCEMENT

    let counterStratum2 = await Questionary.find({ q26_stratum: 2 }).count(); // THIS COUNTER SAVES THE TOTAL REGISTERS BY STRATUM 2 IN ANY ANNOUNCEMENT

    let counterStratum3 = await Questionary.find({ q26_stratum: 3 }).count(); // THIS COUNTER SAVES THE TOTAL REGISTERS BY STRATUM 3 IN ANY ANNOUNCEMENT

    let counterStratum4 = await Questionary.find({ q26_stratum: 4 }).count(); // THIS COUNTER SAVES THE TOTAL REGISTERS BY STRATUM 4 IN ANY ANNOUNCEMENT

    let counterStratum5 = await Questionary.find({ q26_stratum: 5 }).count(); // THIS COUNTER SAVES THE TOTAL REGISTERS BY STRATUM 5 IN ANY ANNOUNCEMENT

    let counterStratum6 = await Questionary.find({ q26_stratum: 6 }).count(); // THIS COUNTER SAVES THE TOTAL REGISTERS BY STRATUM 6 IN ANY ANNOUNCEMENT

    let percentStrat1 = counterStratum1 / counterAnnouncement;

    let percentStrat2 = counterStratum2 / counterAnnouncement;

    let percentStrat3 = counterStratum3 / counterAnnouncement;

    let percentStrat4 = counterStratum4 / counterAnnouncement;

    let percentStrat5 = counterStratum5 / counterAnnouncement;

    let percentStrat6 = counterStratum6 / counterAnnouncement;

    let counterDepAtlant = await Questionary.find({
        q23_departmentStudent: "Atlántico",
    }).count(); //THIS COUNTER SAVES INFO ABOUT TOTAL REGISTERS IN THE DEPARTMENT

    let counterDepBog = await Questionary.find({
        q23_departmentStudent: "Bogotá",
    }).count(); //THIS COUNTER SAVES INFO ABOUT TOTAL REGISTERS IN THE DEPARTMENT

    let counterDepMag = await Questionary.find({
        q23_departmentStudent: "Magdalena",
    }).count(); //THIS COUNTER SAVES INFO ABOUT TOTAL REGISTERS IN THE DEPARTMENT

    let counterDepTol = await Questionary.find({
        q23_departmentStudent: "Tolima",
    }).count(); //THIS COUNTER SAVES INFO ABOUT TOTAL REGISTERS IN THE DEPARTMENT

    let percentDepAtlant = counterDepAtlant / counterAnnouncement;

    let percentDepBog = counterDepBog / counterAnnouncement;

    let percentDepMag = counterDepMag / counterAnnouncement;

    let percentDepTol = counterDepTol / counterAnnouncement;

    let counterStateEnabled = await Questionary.find({
        stateAnnouncementStudent: "ENABLED",
    }).count(); // THIS COUNTER SAVES INFO ABOUT THIS STATE

    let counterStateDisabled = await Questionary.find({
        stateAnnouncementStudent: "DISABLED",
    }).count(); // THIS COUNTER SAVES INFO ABOUT THIS STATE

    let percentStateEnabled = counterStateEnabled / counterAnnouncement;

    let percentStateDisabled = counterStateDisabled / counterAnnouncement;

    let variablesStats = {
        Total: counterAnnouncement,
        Female: percentGenderF,
        Male: percentGenderM,
        Stratum1: counterStratum1,
        Stratum2: counterStratum2,
        Stratum3: counterStratum3,
        Stratum4: counterStratum4,
        Stratum5: counterStratum5,
        Stratum6: counterStratum6,
        DepAtlant: counterDepAtlant,
        DepBog: counterDepBog,
        DepMag: counterDepMag,
        DepTol: counterDepTol,
    };
    res.send(variablesStats);
};

module.exports = {
    StatsAnnouncements,
};