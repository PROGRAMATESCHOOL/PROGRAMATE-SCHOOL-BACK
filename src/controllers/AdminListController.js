const PersonServices = require ('../services/PersonServices');
const Person = require('../models/personsModel');
const bcrypt = require ("bcrypt");

//const getAdminList = (req, res) => {
    //const {profilePerson} = req.body
//    const getAdmin = await Person.find ({profilePerson : 2}).exec();
//    if(filter == 2){
//        Person.find((err, result) => {
//            if (err) throw new Error(err);
//            res.json(result);
//            console.log(result);
//          });
//    }
//}
  
const getAdminList = async (req, res) => {
  try{
    const getAdmin = await Person.find({ profilePerson : 2 });
    res.json(getAdmin);
  } catch (err) {
    res.json({ message: err.message});
  }
};
  module.exports ={getAdminList};