
/*******************************************
 * © 2018 Charlie Hay
 * ---------------------
 * LoginButton
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
	width: 100%;
	padding: .5rem;
	background: rgba(239, 79, 101, 1);
	border: 2px solid #fff;
	color: #fff;
	&:hover, &:active {
		background: rgba(239, 79, 101, 0.5);
	}
`;

/*******************************************
 * React Component
/******************************************/
class LoginButton extends React.PureComponent {
    render() {
        return (
			<Button onClick={this.props.click}>{this.props.label}</Button>
		)
    }
}

export default LoginButton;
