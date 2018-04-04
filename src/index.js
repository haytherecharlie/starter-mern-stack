/* @flow */
/*******************************************
 *
 * ---------------------
 * React Application
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
import { variables } from './assets/styles/variables';

/*******************************************
 * STYLED COMPONENTS
/******************************************/
injectGlobal`
    ${reboot}
    ${fonts}
    ${base}
    ${variables}
`;

/*******************************************
 * RENDER FUNCTION
/******************************************/
ReactDOM.render(
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>,
document.getElementById('root'));
