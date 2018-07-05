/*******************************************
 * © 2018 Charlie Hay
 * ---------------------
 * ROUTES
/******************************************/

/*******************************************
 * NODE_MODULES
/******************************************/
import Express from 'express';

/*******************************************
 * LOCAL IMPORTS
/******************************************/
import api from '../controllers/api';
import staticFiles from '../controllers/static';
import render from '../controllers/render';

/*******************************************
 * CONSTANTS
/******************************************/
const routes = Express.Router()

/*******************************************
 * ROUTES
/******************************************/

// API Endpoints.
routes.get('/api/**', api);

// Static Assets.
routes.get('/static/**', staticFiles);

// Render React.
routes.get('/**', render);

/*******************************************
 * VARIABLES
/******************************************/
export default routes;
