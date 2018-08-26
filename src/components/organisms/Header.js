/* @flow */
/*******************************************
 * © 2018 CBC
 * ---------------------
 * Header
/******************************************/

/*******************************************
 * NODE_MODULES
/******************************************/
import React from 'react';
import styled from 'styled-components';

/*******************************************
 * LOCAL IMPORTS
/******************************************/
import MenuIcon from '../atoms/MenuIcon';
import Logo from '../atoms/Logo';

/*******************************************
 * STYLED COMPONENTS
/******************************************/
const Wrapper = styled.div`
	height: 62px;
	width: 100%;
	display:flex;
	flex-direction: row;
	align-items: center;
	position: fixed;
    box-shadow: 0 0 50px rgba(0,0,0,.4);

    & > *:last-child {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
`;

/*******************************************
 * REACT COMPONENT
/******************************************/
class Header extends React.Component {

	render() {
		return (
			<Wrapper offset={this.props.offset}>
				<MenuIcon/>
				<Logo color="#222">Charlie Hay</Logo>
			</Wrapper>
		)
	}
}

export default Header;
