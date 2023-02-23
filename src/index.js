require('dotenv').config();
const express =require('express');
const mongoose = require('mongoose'); 

const app = express();
const PORT = process.env.PORT || 3000;

// app.get('/', (req,res) =>{
//     res.send("<h1>Hello Word!</h1>")
// })

mongoose.set('strictQuery', true);

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@programateschool.ohubrss.mongodb.net/DBProgramateSchool`)
    .then(() => console.log ("Connected successfully"))
    .catch ((err) => console.error(err));


app.listen(PORT, () => { console.log(`🌟Server listening on port ${PORT}`) });

