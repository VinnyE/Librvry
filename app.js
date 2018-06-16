const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const routes = require('./routes/index');
const path = require('path');

const app = express();

app.use(passport.initialize());

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/', routes);

module.exports = app;