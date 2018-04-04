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

// Landing Routes
router.get('/api/**', landing);

// Static Assets Route
router.get('/static/**', assets);

// Render Route
router.get('/**', render)

/*******************************************
 * VARIABLES
/******************************************/
module.exports = router
