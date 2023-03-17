const bcrypt = require('bcrypt')

const encrypt = async (plainText) => {
    const hash = await bcrypt.hash(plainText, 10)
    return hash
    //Function used for password encryption that returns a Hash
}
const compare = async (plainText, hashPassword) => {
    return await bcrypt.compare(plainText, hashPassword)
    //function that returns a boolean testing the password provided by user and the hash saved in Database Schema
}
module.exports = {
    encrypt,
    compare
}