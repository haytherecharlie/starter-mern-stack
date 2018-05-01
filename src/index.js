/* @flow */
/*******************************************
 * © 2018 Charlie Hay
 * ---------------------
 * REACT APPLICATION
/******************************************/

/*******************************************
 * NODE_MODULES
/******************************************/
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { injectGlobal } from 'styled-components';

/*******************************************
 * LOCAL IMPORTS
/******************************************/
import Routes from './routes';
import { reboot } from './assets/styles/reboot';
import { fonts } from './assets/styles/fonts';
import { base } from './assets/styles/base';

/*******************************************
 * STYLED COMPONENTS
/******************************************/
injectGlobal`${reboot} ${fonts} ${base}`;

/*******************************************
 * RENDER FUNCTION
/******************************************/
ReactDOM.render(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>,
document.getElementById('root'));
