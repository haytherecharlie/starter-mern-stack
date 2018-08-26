/* @flow */
/*******************************************
 * © 2018 CBC
 * ---------------------
 * MenuIcon
/******************************************/

/*******************************************
 * NODE_MODULES
/******************************************/
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

/*******************************************
 * LOCAL IMPORTS
/******************************************/
import { toggleSidebar } from '../../lib/helpers/Redux';

/*******************************************
 * STYLED COMPONENTS
/******************************************/
const Wrapper = styled.a`
	width: 30px;
	height: 20px;
	margin: 1rem 1rem;
	position: relative;

	&:hover {
		opacity: 0.8;
		cursor: pointer;
	}
`;

const MenuBar = `
	transition: .3s;
	height: calc(100% / 6);
	width: 100%;
	background: #222;
	border-radius: 3px;
	position: absolute;
	&[data-status="open"] {
		width: 120%;
	}
`;

const TopBar = styled.div`
	${MenuBar}
	&[data-status="open"] {
		transform: rotate(45deg);
		top: 10px;
	}
`;

const MiddleBar = styled.div`
	${MenuBar}
	top: 40%;
	&[data-status="open"] {
		transform: rotate(45deg);
		top: 10px;
	}
`;

const BottomBar = styled.div`
	${MenuBar}
	bottom: 0;
	&[data-status="open"] {
		transform: rotate(-45deg);
		top: 10px;
	}
`;

/*******************************************
 * REACT COMPONENT
/******************************************/
class MenuIcon extends React.Component {

	handleClick = () => {
		const { sidebar, toggleSidebar } = this.props;
		return sidebar === 'closed' ? toggleSidebar('open') : toggleSidebar('closed');
	}

	render() {
		return (
			<Wrapper onClick={this.handleClick}>
				<TopBar data-status={this.props.sidebar} />
				<MiddleBar data-status={this.props.sidebar} />
				<BottomBar data-status={this.props.sidebar} />
			</Wrapper>
		)
	}
}

const mapProps = state => ({
	sidebar: state.sidebar
})

const mapDispatch = {
	toggleSidebar
}

export default connect(mapProps, mapDispatch)(MenuIcon);
