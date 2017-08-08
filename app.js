'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const api = require('./routes/index.js');

// This is for decoding the request into a JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api', api);

module.exports = app
