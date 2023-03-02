const PersonServices = require ('../services/PersonServices');
const Person = require('../models/personsModel');
const bcrypt = require ("bcrypt");

class adminList {
    async getAdminList(req, res) {
      const adminList = await Person.getAdminList();
      res.status(adminList);
    }
  }
  
  module.exports = new adminList();