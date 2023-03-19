const Questionary = require("../models/questionaryModel");

const StatsAnnouncements = async (req, res) => {

    let counterAnnouncement = await Questionary.find({}).count() // THIS COUNTER SAVES THE TOTAL OF ANNOUNCEMENTS
    console.log(counterAnnouncement)

    let counterGenderF = await Questionary.find({q7_gender: "Femenino"}).count() // THIS COUNTER SAVES THE TOTAL OF WOMAN REGISTERED IN ANY ANNOUNCEMENT
    //console.log("Cantidad de mujeres inscritas en una convocatoria "+counterGenderF)

    let counterGenderM = await Questionary.find({q7_gender: "Masculino"}).count() // THIS COUNTER SAVES THE TOTAL OF MAN REGISTERED IN ANY ANNOUNCEMENT
    //console.log("Cantidad de hombres inscritos en una convocatoria "+counterGenderM)

    let percentGenderF = counterGenderF/counterAnnouncement
    console.log("Porcentaje de mujeres inscritas: " +percentGenderF)

    let percentGenderM = counterGenderM/counterAnnouncement
    console.log("Porcentaje de hombres inscritos: " +percentGenderM)

    let counterStratum1 = await Questionary.find({q26_stratum: 1}).count() // THIS COUNTER SAVES THE TOTAL REGISTERS BY STRATUM 1 IN ANY ANNOUNCEMENT
    //console.log("Cantidad de Personas inscritas de estrato 1: "+counterStratum1)

    let counterStratum2 = await Questionary.find({q26_stratum: 2}).count() // THIS COUNTER SAVES THE TOTAL REGISTERS BY STRATUM 2 IN ANY ANNOUNCEMENT
    //console.log("Cantidad de Personas inscritas de estrato 2: "+counterStratum2)
    
    let counterStratum3 = await Questionary.find({q26_stratum: 3}).count() // THIS COUNTER SAVES THE TOTAL REGISTERS BY STRATUM 3 IN ANY ANNOUNCEMENT
    //console.log("Cantidad de Personas inscritas de estrato 3: "+counterStratum3)
    
    let counterStratum4 = await Questionary.find({q26_stratum: 4}).count() // THIS COUNTER SAVES THE TOTAL REGISTERS BY STRATUM 4 IN ANY ANNOUNCEMENT
    //console.log("Cantidad de Personas inscritas de estrato 4: "+counterStratum4)
    
    let counterStratum5 = await Questionary.find({q26_stratum: 5}).count() // THIS COUNTER SAVES THE TOTAL REGISTERS BY STRATUM 5 IN ANY ANNOUNCEMENT
    //console.log("Cantidad de Personas inscritas de estrato 5: "+counterStratum5)
    
    let counterStratum6 = await Questionary.find({q26_stratum: 6}).count() // THIS COUNTER SAVES THE TOTAL REGISTERS BY STRATUM 6 IN ANY ANNOUNCEMENT
    //console.log("Cantidad de Personas inscritas de estrato 6: "+counterStratum6)

    let percentStrat1 = counterStratum1 / counterAnnouncement
    console.log("Porcentaje de Personas inscritas estrato 1: "+percentStrat1)    
    
    let percentStrat2 = counterStratum2 / counterAnnouncement
    console.log("Porcentaje de Personas inscritas estrato 2: "+percentStrat2)
    
    let percentStrat3 = counterStratum3 / counterAnnouncement
    console.log("Porcentaje de Personas inscritas estrato 3: "+percentStrat3)
    
    let percentStrat4 = counterStratum4 / counterAnnouncement
    console.log("Porcentaje de Personas inscritas estrato 4: "+percentStrat4)   
    
    let percentStrat5 = counterStratum5 / counterAnnouncement
    console.log("Porcentaje de Personas inscritas estrato 5: "+percentStrat5)

    let percentStrat6 = counterStratum6 / counterAnnouncement
    console.log("Porcentaje de Personas inscritas estrato 6: "+percentStrat6)

    let counterDepAtlant = await Questionary.find({q23_departmentStudent: "Atlántico"}).count() //THIS COUNTER SAVES INFO ABOUT TOTAL REGISTERS IN THE DEPARTMENT
    //console.log("Cantidad de Personas de Atlántico: "+counterDepAtlant)

    let counterDepBog = await Questionary.find({q23_departmentStudent: "Bogotá"}).count() //THIS COUNTER SAVES INFO ABOUT TOTAL REGISTERS IN THE DEPARTMENT
    //console.log("Cantidad de Personas de Bogotá: "+counterDepBog)

    let counterDepMag = await Questionary.find({q23_departmentStudent: "Magdalena"}).count() //THIS COUNTER SAVES INFO ABOUT TOTAL REGISTERS IN THE DEPARTMENT
    //console.log("Cantidad de Personas de Magadalena: "+counterDepMag)

    let counterDepTol = await Questionary.find({q23_departmentStudent: "Tolima"}).count() //THIS COUNTER SAVES INFO ABOUT TOTAL REGISTERS IN THE DEPARTMENT
    //console.log("Cantidad de Personas de Tolima: "+counterDepTol)

    let percentDepAtlant = counterDepAtlant / counterAnnouncement
    console.log("Porcentaje de Personas de Atlántico: "+percentDepAtlant)

    let percentDepBog = counterDepBog / counterAnnouncement
    console.log("Porcentaje de Personas de Bogotá: "+percentDepBog)

    let percentDepMag = counterDepMag / counterAnnouncement
    console.log("Porcentaje de Personas de Magdalena: "+percentDepMag)  

    let percentDepTol = counterDepTol / counterAnnouncement
    console.log("Porcentaje de Personas de Tolima: "+percentDepTol)    

    let counterStateEnabled = await Questionary.find({stateAnnouncementStudent: "ENABLED"}).count() // THIS COUNTER SAVES INFO ABOUT THIS STATE
    console.log("Cantidad de Personass con estado ENABLED: "+counterStateEnabled)

    let counterStateDisabled = await Questionary.find({stateAnnouncementStudent: "DISABLED"}).count() // THIS COUNTER SAVES INFO ABOUT THIS STATE
    console.log("Cantidad de Personass con estado DISABLED: "+counterStateDisabled)

    let percentStateEnabled = counterStateEnabled / counterAnnouncement
    console.log("Porcentaje de Personas con estado ENABLED: "+percentStateEnabled)

    let percentStateDisabled = counterStateDisabled / counterAnnouncement
    console.log("Porcentaje de Personas con estado DISABLED: "+percentStateDisabled)

    // let counterScore1to3 = await Questionary.find({ScoreTotal: (1.0, 3.0)}).count() // THIS COUNTER SAVES INFO ABOUT A PARTICULAR TOTAL SCORE
    // console.log("cantidad de puntajes de 1 a 3"+counterScore1to3)

    // let counterScore3to4 = await Questionary.find({ScoreTotal: (3.0, 4.0)}).count() // THIS COUNTER SAVES INFO ABOUT A PARTICULAR TOTAL SCORE
    // console.log("cantidad de puntajes de 3 a 4"+counterScore3to4)

    // let counterScore4to5 = await Questionary.find({ScoreTotal: (4.0,5.0)}).count() // THIS COUNTER SAVES INFO ABOUT A PARTICULAR TOTAL SCORE
    // console.log("cantidad de puntajes de 4 a 5"+counterScore4to5)

    // let percentScore1to3 = counterScore1to3 / counterAnnouncement
    // console.log("Porcentaje de 1 a 3"+percentScore1to3)

    // let percentScore3to4 = counterScore3to4 / counterAnnouncement
    // console.log("Porcentaje de 3 a 4"+percentScore3to4)

    // let percentScore4to5 = counterScore4to5 / counterAnnouncement
    // console.log("Porcentaje de 4 a 5"+percentScore4to5)

}

module.exports = {
    StatsAnnouncements
}