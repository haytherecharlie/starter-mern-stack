/*******************************************
 * 
 * ---------------------
 * LANDING CONTROLLER
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

    // The array of path elements. 
    const path = url.parse(req.url).pathname.split('/');

    // The category.
    const category = path[path.length - 1];

    // The subCategory.
    let subCategory = req.query.s;

    // If the category is valid. 
    if(category in categories) {

        // If subCategory is valid.
        if(subCategory in categories[category].subCategories) {

            // Send Response for category and subCategory. 
            res.status(200).json({
                category, 
                subCategory,
                categoryId: categories[category].subCategories[subCategory].categoryId,
                lineupId: categories[category].subCategories[subCategory].lineupId,
                source: categories[category].subCategories[subCategory].source
            })

        }

        // The subCategory is not valid.
        else {

            // The subCategory is none.
            subCategory = "none";

            // Send response for category only. 
            res.status(200).json({
                category, 
                subCategory,
                categoryId: categories[category].categoryId,
                lineupId: categories[category].lineupId,
                source: categories[category].source                
            });

        }

    }

    // The category is not valid.
    else {

        // Send 404 and error message. 
        res.status(404).json("Invalid Category");

    }

}

