
/*******************************************
 * © 2018 Charlie Hay
 * ---------------------
 * Sidebar
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
const Wrapper = styled.div`
	height: 100%;
	width: ${props => props.width}px;
	display:flex;
	flex-direction: column;
	align-items: center;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1000;
	box-shadow: 0 0 50px rgba(0,0,0,.4);
    padding: 1rem;
    background: #f5f5f5;
`;

/*******************************************
 * React Component
/******************************************/
class Sidebar extends React.Component {
	render() {
		return (
			<Wrapper width={this.props.width}>
				<h2>Main Menu</h2>
			</Wrapper>
		)
	}
}

export default Sidebar;
