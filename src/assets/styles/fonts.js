import thin from '../fonts/thin/thin-s.otf';
import light from '../fonts/light/light-s.otf';
import regular from '../fonts/regular/regular-s.otf';
import medium from '../fonts/medium/medium-s.otf';
import bold from '../fonts/bold/bold-s.otf';
import black from '../fonts/black/black-s.otf';
import thinitalic from '../fonts/thinitalic/thinitalic-s.otf';
import lightitalic from '../fonts/lightitalic/lightitalic-s.otf';
import regularitalic from '../fonts/regularitalic/regularitalic-s.otf';
import mediumitalic from '../fonts/mediumitalic/mediumitalic-s.otf';
import bolditalic from '../fonts/bolditalic/bolditalic-s.otf';
import blackitalic from '../fonts/blackitalic/blackitalic-s.otf';

export const fonts = `
@font-face {font-family: avlo; src: url(${thin}); font-weight: 200; font-style: normal; }
@font-face {font-family: avlo; src: url(${light}); font-weight: 300; font-style: normal; }
@font-face {font-family: avlo; src: url(${regular}); font-weight: 400; font-style: normal; }
@font-face {font-family: avlo; src: url(${medium}); font-weight: 500; font-style: normal; }
@font-face {font-family: avlo; src: url(${bold}); font-weight: 700; font-style: normal; }
@font-face {font-family: avlo; src: url(${black}); font-weight: 800; font-style: normal; }
@font-face {font-family: avlo; src: url(${thinitalic}); font-weight: 200; font-style: italic; }
@font-face {font-family: avlo; src: url(${lightitalic}); font-weight: 300; font-style: italic; }
@font-face {font-family: avlo; src: url(${regularitalic}); font-weight: 300; font-style: italic; }
@font-face {font-family: avlo; src: url(${mediumitalic}); font-weight: 500; font-style: italic; }
@font-face {font-family: avlo; src: url(${bolditalic}); font-weight: 700; font-style: italic; }
@font-face {font-family: avlo; src: url(${blackitalic}); font-weight: 800; font-style: italic; }
.thin          {font-family: avlo; font-weight: 200; font-style: normal;}
.light         {font-family: avlo; font-weight: 300; font-style: normal;}
.regular       {font-family: avlo; font-weight: 400; font-style: normal;}
.medium        {font-family: avlo; font-weight: 500; font-style: normal;}
.bold          {font-family: avlo; font-weight: 700; font-style: normal;}
.black         {font-family: avlo; font-weight: 800; font-style: normal;}
.thinitalic    {font-family: avlo; font-weight: 200; font-style: italic;}
.lightitalic   {font-family: avlo; font-weight: 300; font-style: italic;}
.regularitalic {font-family: avlo; font-weight: 400; font-style: italic;}
.mediumitalic  {font-family: avlo; font-weight: 500; font-style: italic;}
.bolditalic    {font-family: avlo; font-weight: 700; font-style: italic;}
.blackitalic   {font-family: avlo; font-weight: 800; font-style: italic;}
`;