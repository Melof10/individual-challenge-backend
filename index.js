const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const { config } = require('./app/config/index');

app.listen(config.port, function(){
    console.log(`Listening http://localhost:${config.port}`);
});