/*******************************************
 * 
 * ---------------------
 * STORY CONTROLLER
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
    let category = req.query.c;
    
    // The subCategory variable.
    let subCategory = req.query.s;

    // If the category is valid.
    if(category in categories) {

        // If subCategory is valid.
        if(subCategory in categories[category].subCategories) {

            // Send 200 with articleId and category. 
            res.status(200).json({
                articleId, 
                category,
                subCategory,
                categoryId: categories[category].subCategories[subCategory].categoryId,
                lineupId: categories[category].subCategories[subCategory].lineupId,
                source: categories[category].subCategories[subCategory].source
            });
        }

        // If subCategory is not valid.
        else {

            subCategory = "none";

            // Send 200 with articleId and category = "home".
            res.status(200).json({
                articleId, 
                category,
                subCategory,
                categoryId: categories[category].categoryId,            
                lineupId: categories[category].lineupId,
                source: categories[category].source
            });
        }

    }

    // Category is not valid. 
    else {

        // Set category to Home.
        category = "home";

        // Set subCategory to None.
        subCategory = "none";

        // Send 200 with articleId and category = "home".
        res.status(200).json({
            articleId, 
            category,
            subCategory,
            categoryId: categories[category].categoryId,            
            lineupId: categories[category].lineupId,
            source: categories[category].source
        });

    }
    
}
