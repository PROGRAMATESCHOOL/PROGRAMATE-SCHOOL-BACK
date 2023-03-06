require('dotenv').config();
const express =require('express');
const mongoose = require('mongoose'); 
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require('nodemailer');


const app = express();
const PORT = process.env.PORT || 3000;

const PersonRoutes = require("./routes/v1/PersonsRoutes");

//Capture data User
//app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyParser.json());
//Import routes
//const authRoutes = require('./routes/rout')

//Route middlewwares(validation)
app.use('/api/', PersonRoutes);
//app.get('/', (req, res) =>{
//   res.json({
//      estado:true,
//      mensaje:'funcional'
//   })
//});

app.use(express.json());
app.use(cors());

//Review if this is necesary -AP
app.use(express.static('../public'));
app.use(express.urlencoded({ extended: false}));

//conection database MongoDB
mongoose.set('strictQuery', true);

//mongoose.connect(`mongodb://127.0.0.1:27017/PSchool`)

//Conection db in MongoAtlas
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@programateschool.ohubrss.mongodb.net/DBProgramateSchool`)
    .then(() => console.log ("Connected successfully"))
    .catch ((err) => console.error(err));

app.listen(PORT, () => { 
    console.log(`🌟Server listening on port ${PORT}`) });