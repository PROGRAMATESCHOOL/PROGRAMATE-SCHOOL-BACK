require('dotenv').config();
const express =require('express');
const mongoose = require('mongoose'); 
const bodyParser = require("body-parser");
const cors = require("cors");

const PersonRoutes = require("./routes/PersonsRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// app.get('/', (req,res) =>{
//     res.send("<h1>Hello Word!</h1>")
// })

//const connectionOptions = { useUnifiedTopology: true, useNewUrlParser: true};

mongoose.set('strictQuery', true);

app.use(express.json());
app.use(cors());

app.use("/api/", PersonRoutes);

//mongoose.connect(`mongodb://127.0.0.1:27017/PSchool`)
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@programateschool.ohubrss.mongodb.net/DBProgramateSchool`)
    .then(() => console.log ("Connected successfully"))
    .catch ((err) => console.error(err));


app.listen(PORT, () => { console.log(`🌟Server listening on port ${PORT}`) });
