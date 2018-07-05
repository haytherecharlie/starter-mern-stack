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
export default class Home extends React.Component {
	render() {
		return (
			<View>
				<Link to="/wow">Home Page</Link>
			</View>
		)
	}
}
