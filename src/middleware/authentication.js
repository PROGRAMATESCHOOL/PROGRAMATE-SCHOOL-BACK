const { verifyToken } = require('../helpers/sessionToken')

const checkAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || authHeader.length === 0) {
            return res
            .status(401)
            .json({ error: "No authorization header found" });
        }
        const token = authHeader.split(" ").pop();
        const tokenData = await verifyToken(token)
        if (tokenData._id) {
            next()
        } else {
            res
                .status(409)
                .send({error:'no tienes permisos para acceder'})
        }

    } catch (e) {
        console.log(e)
        res
            .status(409)
            .send({error:'no tienes permisos'})
    }
}
module.exports = checkAuth