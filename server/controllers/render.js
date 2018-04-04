/*******************************************
 *
 * ---------------------
 * RENDER CONTROLLER
/******************************************/

/*******************************************
 * NODE_MODULES
/******************************************/
const path = require('path');
const fs = require('fs');
const React = require('react');
const { renderToString } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');

/*******************************************
 * LOCAL IMPORTS
/******************************************/
const { default: App } = require('../../src/routes');

/*******************************************
 * RENDER FUNCTION
/******************************************/
const render = (req, res) => {

    // Path to index.html
    const filePath = path.resolve(__dirname, '../../build/index.html');

    // Read index.html
    fs.readFile(filePath, 'utf8', (err, htmlData) => {

        // If error, send 404.
        if (err)
            return res.status(404).send(err);

        // Constants.
        const context = {}

        // Static Router Markup.
        const markup = renderToString(
            <StaticRouter location={req.url} context={context}>
                <App />
            </StaticRouter>
        )

        // Handle redirect.
        if (context.url) res.redirect(301, context.url)

        // Send markup.
        else res.send(htmlData.replace('<br>', markup))

    })

}

/*******************************************
 * MODULE EXPORTS
/******************************************/
module.exports = render;
