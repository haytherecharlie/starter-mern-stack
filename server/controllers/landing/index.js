/*******************************************
 * 
 * ---------------------
 * API CONTROLLER
/******************************************/

/*******************************************
 * NODE_MODULES
/******************************************/
const url = require('url');

/*******************************************
 * LOCAL IMPORTS
/******************************************/
const categories = require('../../constants/categories');

/*******************************************
 * STORY RESPONSE
/******************************************/
module.exports = (req, res) => {

    // The parsed request URL.
    const urlements = url.parse(req.url);

    // The path array. 
    const pathArray = urlements.pathname.split('/');

    // The article ID. 
    const articleId = pathArray[pathArray.length -1];

    // The section. 
    const section = urlements.query;
    
}

