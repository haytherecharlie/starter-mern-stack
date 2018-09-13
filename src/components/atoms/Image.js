
/*******************************************
 * © 2018 Charlie Hay
 * ---------------------
 * Image
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
const Img = styled.img`
	width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.theme.color};
    font-family: ${props => props.theme.font};
    margin: 1rem;
`;

/*******************************************
 * React Component
/******************************************/
class Image extends React.PureComponent {
	render() {
		return (
			<Img src={this.props.source} height={this.props.height} width={this.props.width} />
		)
	}
}


export default Image;
