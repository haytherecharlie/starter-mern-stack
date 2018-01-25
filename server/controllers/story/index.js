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

    // The category. 
    const category = urlements.query;

    // If the category is valid.
    if(category in categories) {

        // Send 200 with articleId and category. 
        res.status(200).json({articleId, category});

    }

    // Category is not valid. 
    else {

        // Send 200 with articleId and category = "home".
        res.status(200).json({articleId, category: "home"});

    }
    
}
