/*******************************************
 * © 2018 Charlie Hay
 * ---------------------
 * Express Application
 ******************************************/

/*******************************************
 * Node Modules
 ******************************************/
import express from 'express';
import path from 'path';
import { config } from 'dotenv';

/*******************************************
 * Constants
 ******************************************/
const app = express();
const env = config();
const port = process.env.REACT_APP_NODE_PORT || 8080;

/*******************************************
 * App Configuration
 ******************************************/
app.use(express.static(path.join(__dirname, '/../build')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname + '/../build/index.html')));

/*******************************************
 * Start Express App
 ******************************************/
app.listen(port, () => console.log(`App Started on Port ${port}`));
