const jwt = require('jsonwebtoken');

const getToken = (payload) => {
    return jwt.sign({
        data: payload
        }, 'SECRET', { expiresIn: '1h'});
}

//Here, I can add "passwordPerson" because is the data that I need to serelized -AP
const getTokenData = ( token ) => {
    let data = null;
    jwt.verify(token, 'SECRET', (err, decoded)=> {
        if (err){
            console.log ('Error al obtener data del token')
        } else {
            data = decoded;
        }
    });

    return data;

    //Get a template
}

module.exports = {
    getToken,
    getTokenData
}