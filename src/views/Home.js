/* @flow */
/*******************************************
 * © 2018 Charlie Hay
 * ---------------------
 * HOME VIEW
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
export default class Home extends React.Component {
    render() {
        return (
            <View>
                <span className="regular container">Home Page</span>
            </View>
        )
    }
}
