require('dotenv').config();
const PersonRoutes = require("./routes/v1/PersonsRoutes");
const express =require('express');
const mongoose = require('mongoose'); 
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
//const corsOptions = require("./config/corsConfig").default;

mongoose.set('strictQuery', true);
const PersonRoutes = require("./routes/v1/PersonsRoutes");
const { corsOptions } = require("./config/corsConfig");

mongoose.set("strictQuery", true);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.json());

app.use(cors(corsOptions));

app.use("/api/", PersonRoutes);

//Review if this is necesary -AP
app.use(express.static("../public"));
app.use(express.urlencoded({ extended: false }));


//mongoose.connect(`mongodb://127.0.0.1:27017/PSchool`)
//Conection db in MongoAtlas
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@programateschool.ohubrss.mongodb.net/DBProgramateSchool`
  )
  .then(() => console.log("Connected successfully"))
  .catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`🌟Server listening on port ${PORT}`);
});
