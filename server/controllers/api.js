/*******************************************
 * 
 * ---------------------
 * API CONTROLLER
/******************************************/

/*******************************************
 * LOCAL IMPORTS
/******************************************/
const loginJson = require('../responses/login.json');
const clientsJson = require('../responses/clients.json');
const profileJson = require('../responses/profile.json');
const ratingsJson = require('../responses/ratings.json');

/*******************************************
 * LOGIN FUNCTION
/******************************************/
export const login = (req, res) => {
    res.status(200).json(loginJson)
}

/*******************************************
 * CLIENT FUNCTION
/******************************************/
export const clients = (req, res) => {
    res.status(200).json(clientsJson)
}

/*******************************************
 * PROFILE FUNCTION
/******************************************/
export const profile = (req, res) => {
    res.status(200).json(profileJson)
}

/*******************************************
 * RATING FUNCTION
/******************************************/
export const ratings = (req, res) => {
    res.status(200).json(ratingsJson)
}

/*******************************************
 * ERROR FUNCTION
/******************************************/
export const error = (req, res) => {
    res.status(404).end('API route Does not exist.');
}
