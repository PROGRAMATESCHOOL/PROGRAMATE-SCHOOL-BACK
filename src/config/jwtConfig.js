const jwt = require('jsonwebtoken');

const getToken = (payLoad) => {
    return jwt.sign({
        data: payLoad
        }, 'SECRETWORD', { expiresIn: '1h'});
}

//Here, I can add "passwordPerson" because is the data that I need to serelized -AP
const getTokenData = ({ passwordPerson}) => {
    let data = null;
    jwt.verify(token, 'SECRETWORD', (err, decoded)=> {
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