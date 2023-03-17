const { verifyToken } = require('../helpers/sessionToken')
const Person = require('../models/personsModel')

const checkProfileAuth = (profiles) => async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop()
        const tokenData = await verifyToken(token)
        const userData = await Person.findById(tokenData._id)

        if ([].concat(profiles).includes(userData.profilePerson)) {
            next()
        } else {
            res
                .status(409)
                .send({ error: "no tienes permisos" })
            console.log(userData)
        }
    } catch (e) {
        console.log(e)
        res
            .status(409)
            .send({error: 'Tu por aqui no pasas!'})
    }
}
module.exports = checkProfileAuth