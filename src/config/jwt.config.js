const jwt = require('jsonwebtoken');

 // function to get a token from a payload
const getToken = (payload) => {
    return jwt.sign({
        data: payload
    }, 'SECRET', { expiresIn: '1h'});
}

// function to get the data from a token
const getTokenData = (token) => {
    let data = null;
    jwt.verify(token, 'SECRET', (err, decoded) => {
        if(err) {
            console.log('Error data of token')
        } else {
            data = decoded;
        }
    });

    return data;
}

module.exports = {
    getToken,
    getTokenData
}