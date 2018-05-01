/* @flow */
/*******************************************
 * © 2018 Charlie Hay
 * ---------------------
 * BASE STYLES
/******************************************/

/*******************************************
 * CONSTANTS
/******************************************/
export const base = `
    body {
        margin: 0;

        * { letter-spacing: none;
            box-sizing: border-box;
            -webkit-overflow-scrolling: touch;
            &:focus { outline: none; }
        }
    }
`;