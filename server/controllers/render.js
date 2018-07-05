/*******************************************
 * © 2018 Charlie Hay
 * ---------------------
 * RENDER CONTROLLER
/******************************************/

/*******************************************
 * NODE MODULES
/******************************************/
import path from 'path';
import fs from 'fs';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

/*******************************************
 * LOCAL IMPORTS
/******************************************/
import Routes from '../../src/routes';

/*******************************************
 * RENDER FUNCTION
/******************************************/
export default (req, res) => {

	// Index.html Path.
	const indexPath = path.resolve(__dirname, '../../build/index.html');

	fs.readFile(indexPath, 'UTF8', (err, html) => {

		// If error, send 404.
		if (err) return res.status(404).json({
			status: 200,
			message: "Server failed to render HTML.",
			payload: {}
		});

		// Create React Markup.
		const markup = renderToString(
			<StaticRouter location={req.url}>
				<Routes/>
			</StaticRouter>
		)

		// Serve React HTML
		return res.status(200).send(html.replace('<!-- React -->', markup))

	})
}
