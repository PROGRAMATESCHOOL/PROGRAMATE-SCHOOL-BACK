const personServices = require("../services/PersonServices");
const Person = require("../models/personsModel");
const uniqid = require("uniqid");

const NewAdmin = async (req, res) => {
  const {
    name1Person,
    name2Person,
    lastname1Person,
    lastname2Person,
    documentPerson,
    profilePerson,
    agePerson,
  } = req.body; //Parse the request for using data

  const existentAdmin = await Person.findOne({ emailPerson }).exec();
  const existentDocumentAdmin = await Person.findOne({ documentPerson }).exec(); //searches for an existing user with the same document or email

  if (existentAdmin || existentDocumentAdmin) {
    res.status(409).send({ status: "Admin already exists" }); //Compares in case already exists and return error code 
    return;
  } else {
    const profilePerson = 2;
    if (profilePerson == 2) {
      const passwordPerson = uniqid(undefined, lastname1Person);
      

      const createNewAdmin = new Person({
        name1Person: name1Person,
        name2Person: name2Person,
        lastname1Person: lastname1Person,
        lastname2Person: lastname2Person,
        documentPerson: documentPerson,
        emailPerson: emailPerson,
        profilePerson: profilePerson,
        passwordPerson: passwordPerson,
        agePerson: agePerson,
      });

      createNewAdmin.save();
      res
        .status(201)
        .send({ status: "New admin created", data: createNewAdmin });

    
      
      return;
    } else { //if profile person is not 2 return error code, might change in future updates
      res.status(401).send({ status: "Not an allowed profile" }); 
    }
  }
};

module.exports = { NewAdmin };
