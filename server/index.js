/*******************************************
 * © 2018 Charlie Hay
 * ---------------------
 * EXPRESS SERVER
/******************************************/

/*******************************************
 * NODE_MODULES
/******************************************/
import Express from 'express';
import BodyParser from 'body-parser';
import Morgan from 'morgan';

/*******************************************
 * LOCAL IMPORTS
/******************************************/
import Routes from './routes';

/*******************************************
 * CONSTANTS
/******************************************/
const App = Express();
const PORT = process.env.PORT || 3001;

/*******************************************
 * APP CONFIGURATION
/******************************************/
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json({ limit: '25mb' }));
App.use(Morgan('combined'));
App.use(Routes);

/*******************************************
 * START SERVER
/******************************************/
App.listen(PORT, () => console.log(`Server on ${PORT}!`));
