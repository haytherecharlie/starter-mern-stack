/*******************************************
 * © 2018 Charlie Hay
 * ---------------------
 * STATIC CONTROLLER
/******************************************/

/*******************************************
 * FUNCTION
/******************************************/
import path from 'path';

export default (req, res) => res.status(200).sendFile(path.resolve(__dirname + '/../../build' + req.originalUrl));
