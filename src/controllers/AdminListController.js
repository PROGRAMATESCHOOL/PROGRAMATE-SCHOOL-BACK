const PersonServices = require ('../services/PersonServices');
const Person = require('../models/personsModel');
const bcrypt = require ("bcrypt");
//const { profile } = require('console');

//class adminList {
//    async getAdminList(req, res) {
//      const adminList = await Person.getAdminList();
//      res.status(adminList);
//    }
//  }

const getAdminList = (req, res) => {
    const {profilePerson} = req.body
    const filter = Person.find ({profilePerson}).exec();
    if(filter == 2){
        Person.find((err, result) => {
            if (err) throw new Error(err);
            res.json(result);
            console.log(result);
          });
    }
}
  
  //module.exports = new adminList();
  module.exports ={getAdminList};