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
const { Provider } = require('react-redux');
const { renderToString } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');

/*******************************************
 * LOCAL IMPORTS
/******************************************/
const { default: configureStore } = require('../../../src/redux/store');
const { default: App } = require('../../../src/router');

/*******************************************
 * RENDER FUNCTION
/******************************************/
const render = (req, res) => {

    // Path to index.html
    const filePath = path.resolve(__dirname, '../../../build/index.html');

    // Read index.html
    fs.readFile(filePath, 'utf8', (err, htmlData) => {

        // If error, send 404.
        if (err) return res.status(404).end('Error Reading HTML');

        // Constants.
        const context = {}
        const store = configureStore()

        // Static Router Markup.
        const markup = renderToString(
            <Provider store={store}>
                <StaticRouter location={req.url} context={context}>
                    <App />
                </StaticRouter>
            </Provider>
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
