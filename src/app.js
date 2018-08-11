
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//Conecta ao dataBase
mongoose.connect('mongodb://WelGomws:esporte36@ds119442.mlab.com:19442/doe-services', {
    useNewUrlParser: true
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


module.exports = app;