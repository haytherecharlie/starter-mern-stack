/* @flow */
/*******************************************
 * © 2018 CBC
 * ---------------------
 * PanelButton
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
const Button = styled.button`
	border: none;
	background: transparent;
	&:hover, &:active {
		opacity: 0.8;
	}
`;

/*******************************************
 * REACT COMPONENT
/******************************************/
class PanelButton extends React.PureComponent {
	render() {
		return (
			<Button onClick={this.props.click}>
				{this.props.children}
			</Button>
		)
	}
}

export default PanelButton;
