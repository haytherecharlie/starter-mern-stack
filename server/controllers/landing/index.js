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

    // The category. 
    const category = pathArray[pathArray.length -1];

    // If the category is valid. 
    if(category in categories) {

        // The subCategory variable.
        const subCategory = urlements.query;

        // If subCategory is valid.
        if(subCategory in categories[category].subCategories) {

            // Send Response for category and subCategory. 
            res.status(200).json({
                category, 
                subCategory,
                lineupId: categories[category].subCategories[subCategory].lineupId,
                source: categories[category].subCategories[subCategory].source
            })

        }

        // The subCategory is not valid.
        else {

            // Send response for category only. 
            res.status(200).json({
                category, 
                subCategory: "none",
                lineupId: categories[category].lineupId,
                source: categories[category].source                
            });

        }

    }

    // The category is not valid.
    else {

        // Send 404 and error message. 
        res.send(404).json("Invalid Category");

    }

}

