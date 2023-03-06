require('dotenv').config();
const express =require('express');
const mongoose = require('mongoose'); 
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require('nodemailer');


const app = express();
const PORT = process.env.PORT || 3000;

const PersonRoutes = require("./routes/v1/PersonsRoutes");

app.use(bodyParser.json());

//Import routes
//const authRoutes = require('./routes/rout')

//Route middlewwares(validation)
app.use('/api/', PersonRoutes);
app.use(express.json());
app.use(cors());

//Review if this is necesary -AP
app.use(express.static('../public'));
app.use(express.urlencoded({ extended: false}));

mongoose.set('strictQuery', true);

app.use(express.json());
app.use(cors())

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//mongoose.connect(`mongodb://127.0.0.1:27017/PSchool`)

//Conection db in MongoAtlas
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@programateschool.ohubrss.mongodb.net/DBProgramateSchool`)
    .then(() => console.log ("Connected successfully"))
    .catch ((err) => console.error(err));

app.listen(PORT, () => { 
    console.log(`🌟Server listening on port ${PORT}`) });