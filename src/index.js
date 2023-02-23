require('dotenv').config();
const express =require('express');
const mongoose = require('mongoose'); 
const bodyparser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;


//Capture data User
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());


//Import routes
const authRoutes = require('./routes/rout')


//Route middlewwares(validation)
app.use('/api/user', authRoutes);
app.get('/', (req, res) =>{
    res.json({
        estado:true,
        mensaje:'funcional'
    })
});


//conection database MongoDB
mongoose.set('strictQuery', true);
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@programateschool.ohubrss.mongodb.net/DBProgramateSchool`)
    .then(() => console.log ("Connected successfully"))
    .catch ((err) => console.error(err));

app.listen(PORT, () => { 
    console.log(`🌟Server listening on port ${PORT}`) });

