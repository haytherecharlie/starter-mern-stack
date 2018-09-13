
/*******************************************
 * © 2018 Charlie Hay
 * ---------------------
 * PanelButton
/******************************************/

/*******************************************
 * Node Modules
/******************************************/
import React from 'react';
import styled from 'styled-components';

/*******************************************
 * Local Imports
/******************************************/

/*******************************************
 * Styled Components
/******************************************/
const Button = styled.button`
	border: none;
	background: transparent;
	&:hover, &:active {
		opacity: 0.8;
	}
`;

/*******************************************
 * React Component
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
