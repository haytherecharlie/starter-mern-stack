/* @flow */
/*******************************************
 * © 2018 CBC
 * ---------------------
 * Image
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
const Img = styled.img`
	width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.theme.color};
    font-family: ${props => props.theme.font};
    margin: 1rem;
`;

/*******************************************
 * REACT COMPONENT
/******************************************/
class Image extends React.PureComponent {
	render() {
		return (
			<Img src={this.props.source} height={this.props.height} width={this.props.width} />
		)
	}
}


export default Image;
