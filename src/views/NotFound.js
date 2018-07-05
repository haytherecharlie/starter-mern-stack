/* @flow */
/*******************************************
 * © 2018 Charlie Hay
 * ---------------------
 * NOT FOUND VIEW
/******************************************/

/*******************************************
 * NODE_MODULES
/******************************************/
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
export default class NotFound extends React.Component {
	render() {
		return (
			<View>
				<Link to="/">Page Not Found</Link>
            </View>
		)
	}
}
