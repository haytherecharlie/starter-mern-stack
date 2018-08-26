/* @flow */
/*******************************************
 * © 2018 CBC
 * ---------------------
 * Copyright
/******************************************/

/*******************************************
 * NODE_MODULES
/******************************************/
import React from 'react';
import styled from 'styled-components';

/*******************************************
 * LOCAL IMPORTS
/******************************************/

/*******************************************
 * STYLED COMPONENTS
/******************************************/
const Text = styled.span`
    color: ${props => props.color};
    font-family: 'Rock Salt', cursive;
`;

/*******************************************
 * REACT COMPONENT
/******************************************/
class Logo extends React.PureComponent {
	render() {
		return (
			<Text color={this.props.color}>{this.props.children}</Text>
		)
	}
}

export default Logo;
