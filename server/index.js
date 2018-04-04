/*******************************************
 *
 * ---------------------
 * EXPRESS SERVER
/******************************************/

/*******************************************
 * NODE_MODULES
/******************************************/
require('babel-register')({ ignore: /\/(build|node_modules)\//, presets: ['env', 'react-app'] });
const bodyParser = require('body-parser');
const compression = require('compression');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');

/*******************************************
 * VARIABLES
/******************************************/
const PORT = process.env.PORT || 3001;
const index = require('./routes');
const app = express();

/*******************************************
 * APP CONFIGURATION
/******************************************/
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('combined'));
app.use('/', index);
app.use(express.static(path.resolve(__dirname, '../build')));
console.log(path.resolve(__dirname, '../build'));

/*******************************************
 * START SERVER
/******************************************/
app.listen(PORT, () => { console.log(`Server on ${PORT}!`) });
