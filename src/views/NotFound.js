/* @flow */
/*******************************************
 * © 2018 Charlie Hay
 * ---------------------
 * NotFound
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
export default class NotFound extends React.PureComponent {
    render() {
        return (
            <View>
                <span className="regular container">Page Not Found</span>
            </View>
        )
    }
}
