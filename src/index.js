require('dotenv').config();
const express =require('express');
const mongoose = require('mongoose'); 
const bodyParser = require("body-parser");
const cors = require("cors");

const PersonRoutes = require("./routes/v1/PersonsRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

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


//conection database MongoDB
mongoose.set('strictQuery', true);

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use("api/login/", PersonRoutes);

//mongoose.connect(`mongodb://127.0.0.1:27017/PSchool`)
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@programateschool.ohubrss.mongodb.net/DBProgramateSchool`)
    .then(() => console.log ("Connected successfully"))
    .catch ((err) => console.error(err));

app.listen(PORT, () => { 
    console.log(`🌟Server listening on port ${PORT}`) });