const personServices = require("../services/PersonServices");
const Person = require("../models/personsModel");

//Login Person
// const loginPerson = (req, res) => {
//     const personEmail = PersonSchema(req.body.personEmail);
//     if (!personEmail) {
//         alert("Correo no registrado. Por favor resgistrese si es estudiante, si es administrador, contacte a la mesa de ayuda");
//         return
//     }
//     else {
//         const personPassword = PersonSchema(req.body.personPassword);
//         if (!personPassword) {
//             res.send("error")
//             alert("Contraseña errónea. Inténtelo de nuevo")
//             return
//         }
//         else {
//             const profilePerson = PersonSchema(req.body.profilePerson)

//             if (profilePerson === 1) {
//                 res.send("OK")
//                 alert("Superadmin, ha ingresado a Prográmate School");
//                 // Direct to main for Superadmin
//                 return
//             }
//             if (profilePerson === 2) {
//                 res.send("OK")
//                 alert("Admin, ha ingresado a Prográmate School");
//                 // Direct to main for Superadmin
//                 return
//             }
//             if (profilePerson === 3) {
//                 res.send("OK")
//                 alert("Estudiante, ha ingresado a Prográmate School");
//                 // Direct to main for Superadmin
//                 return
//             }

//         }
//     }
// }

// //Get all person registered in the database
// const getAllPersons = (req, res) => {
//     Person.find((err, result) => {
//         if(err) throw new Error(err);
//         res.json(result);
//         console.log(result)
//     })
// }

// module.exports = {
//     loginPerson,
//     getAllPersons
// }
