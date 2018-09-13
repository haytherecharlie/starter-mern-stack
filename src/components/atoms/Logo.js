
/*******************************************
 * © 2018 Charlie Hay
 * ---------------------
 * Copyright
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
const Text = styled.span`
    color: ${props => props.color};
    font-family: 'Rock Salt', cursive;
`;

/*******************************************
 * React Component
/******************************************/
class Logo extends React.PureComponent {
	render() {
		return (
			<Text color={this.props.color}>{this.props.children}</Text>
		)
	}
}

export default Logo;
