/*******************************************
 * © 2018 Charlie Hay
 * ---------------------
 * EXPRESS SERVER
/******************************************/

/*******************************************
 * NODE_MODULES
/******************************************/
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import path from 'path';

/*******************************************
 * LOCAL IMPORTS
/******************************************/
import routes from './routes';

/*******************************************
 * CONSTANTS
/******************************************/
const app = express();
const PORT = process.env.PORT || 3001;

/*******************************************
 * APP CONFIGURATION
/******************************************/
app.use(bodyParser.json({ limit: '25mb' }));
app.use(morgan('combined'));
app.use(routes);

/*******************************************
 * START SERVER
/******************************************/
app.listen(PORT, () => console.log(`Server on ${PORT}!`));
