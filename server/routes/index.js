/*******************************************
 * 
 * ---------------------
 * EXPRESS SERVER
/******************************************/

/*******************************************
 * NODE_MODULES
/******************************************/
const express = require('express')

/*******************************************
 * LOCAL IMPORTS
/******************************************/
const render = require('../controllers/render');
const api = require('../controllers/api');
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
// Mock Route
router.get('/api/login', api.mock);

// Api Error Route
router.get('/api/**', api.error);

// Static Assets Route
router.get('/static/**', assets.send);

// Render Route
router.get('/**', render)

/*******************************************
 * VARIABLES 
/******************************************/
module.exports = router
