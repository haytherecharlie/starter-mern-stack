/* @flow */
/*******************************************
 * © 2018 Charlie Hay
 * ---------------------
 * Landing
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
    height: 100%;
    width: 100%;
`;

/*******************************************
 * REACT COMPONENT
/******************************************/
export default class Landing extends React.PureComponent {
    render() {
        return (
            <View>
                Landing
            </View>
        )
    }
}
