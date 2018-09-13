
/*******************************************
 * © 2018 Charlie Hay
 * ---------------------
 * ImageButton
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
	width: 30px;
	height: 30px;
	margin: 1rem;
	border: none;
	background: url(${props => props.url}) no-repeat center;
	background-size: cover;
	border: 1px solid #fff;
	border-radius: 50%;
`;

/*******************************************
 * React Component
/******************************************/
class ImageButton extends React.PureComponent {
	render() {
		return (
			<Button onClick={this.props.click} url={this.props.image} />
		)
	}
}

export default ImageButton;
