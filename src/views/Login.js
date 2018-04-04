/* @flow */
/*******************************************
 * © 2018 Charlie Hay
 * ---------------------
 * Login
/******************************************/

/*******************************************
 * NODE_MODULES
/******************************************/
import React from 'react';
import styled from 'styled-components';

/*******************************************
 * LOCAL IMPORTS
/******************************************/
const View = styled.div`
    height: 100vh;
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

/*******************************************
 * REACT COMPONENT
/******************************************/
export default class Login extends React.Component {
    render() {
        return (
            <View>
                <span className="regular container">Login Page</span>
            </View>
        )
    }
}
