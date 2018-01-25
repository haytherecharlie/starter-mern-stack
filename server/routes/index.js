/*******************************************
 * 
 * ---------------------
 * EXPRESS SERVER
/******************************************/

/*******************************************
 * NODE_MODULES
/******************************************/
const express = require('express');

/*******************************************
 * LOCAL IMPORTS
/******************************************/
const render = require('../controllers/render');
const story = require('../controllers/story');
const landing = require('../controllers/landing');
const assets = require('../controllers/assets');

/*******************************************
 * VARIABLES 
/******************************************/
const router = express.Router()
router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

/*******************************************
 * ROUTES
/******************************************/

// Story Routes
router.get(/\/api\/story\/[+-]?([0-9]*[.])?[0-9]+$/, story);

// Landing Routes
router.get('/api/landing/**', landing);

// Static Assets Route
router.get('/static/**', assets.send);

// Render Route
router.get('/**', render)

/*******************************************
 * VARIABLES 
/******************************************/
module.exports = router
