/* @flow */
/*******************************************
 * © 2018 Charlie Hay
 * ---------------------
 * FONT STYLES
/******************************************/

/*******************************************
 * LOCAL IMPORTS
/******************************************/
import Light from '../fonts/NeoSans-Light.otf';
import LightItalic from '../fonts/NeoSans-LightItalic.otf';
import Regular from '../fonts/NeoSans-Regular.otf';
import RegularItalic from '../fonts/NeoSans-RegularItalic.otf';
import Medium from '../fonts/NeoSans-Medium.otf';
import MediumItalic from '../fonts/NeoSans-MediumItalic.otf';
import Bold from '../fonts/NeoSans-Bold.otf';
import BoldItalic from '../fonts/NeoSans-BoldItalic.otf';
import Black from '../fonts/NeoSans-Black.otf';
import BlackItalic from '../fonts/NeoSans-BlackItalic.otf';

/*******************************************
 * CONSTANTS
/******************************************/
export const fonts = `
@font-face {font-family: NeoSans; src: url(${Light}); font-weight: 300; font-style: normal; }
@font-face {font-family: NeoSans; src: url(${Regular}); font-weight: 400; font-style: normal; }
@font-face {font-family: NeoSans; src: url(${Medium}); font-weight: 500; font-style: normal; }
@font-face {font-family: NeoSans; src: url(${Bold}); font-weight: 700; font-style: normal; }
@font-face {font-family: NeoSans; src: url(${Black}); font-weight: 800; font-style: normal; }
@font-face {font-family: NeoSans; src: url(${LightItalic}); font-weight: 300; font-style: italic; }
@font-face {font-family: NeoSans; src: url(${RegularItalic}); font-weight: 300; font-style: italic; }
@font-face {font-family: NeoSans; src: url(${MediumItalic}); font-weight: 500; font-style: italic; }
@font-face {font-family: NeoSans; src: url(${BoldItalic}); font-weight: 700; font-style: italic; }
@font-face {font-family: NeoSans; src: url(${BlackItalic}); font-weight: 800; font-style: italic; }
.light         {font-family: NeoSans; font-weight: 300; font-style: normal;}
.regular       {font-family: NeoSans; font-weight: 400; font-style: normal;}
.medium        {font-family: NeoSans; font-weight: 500; font-style: normal;}
.bold          {font-family: NeoSans; font-weight: 700; font-style: normal;}
.black         {font-family: NeoSans; font-weight: 800; font-style: normal;}
.lightitalic   {font-family: NeoSans; font-weight: 300; font-style: italic;}
.regularitalic {font-family: NeoSans; font-weight: 400; font-style: italic;}
.mediumitalic  {font-family: NeoSans; font-weight: 500; font-style: italic;}
.bolditalic    {font-family: NeoSans; font-weight: 700; font-style: italic;}
.blackitalic   {font-family: NeoSans; font-weight: 800; font-style: italic;}
`;