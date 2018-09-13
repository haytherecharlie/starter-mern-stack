
/*******************************************
 * © 2018 Charlie Hay
 * ---------------------
 * Profile Panel
/******************************************/

/*******************************************
 * Node Modules
/******************************************/
import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import cookies from 'cookies-js';

/*******************************************
 * Local Imports
/******************************************/
import { setUser } from '../../lib/helpers/Redux';
import Button from '../atoms/ImageButton';
import user from '../../assets/images/user.png';
import PanelButton from '../atoms/PanelButton';

/*******************************************
 * Styled Components
/******************************************/
const Wrapper = styled.div`
	position: relative

	& > button:hover {
		opacity: 0.8;
	}
`;

const PanelWrapper = styled.div`
	display: ${props => props.display};
	height: 100vw;
	width: 100vw;
	position: fixed;
	top: 0;
	left: 0;
	background: transparent;
`;

const SettingsPanel = styled.div`
	position: absolute;
	right: 1rem;
	top: 62px;
	padding: 1rem;
	width: 250px;
	background: #01121C;
	box-shadow: 0 0 10px rgba(0,0,0,0.2);
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow: hidden;

	&:after, &:before {
		bottom: 100%;
		left: 235px;
		border: solid transparent;
		content: " ";
		height: 0;
		width: 0;
		position: absolute;
		pointer-events: none;
	}

	&:after {
		border-color: rgba(136, 183, 213, 0);
		border-bottom-color: #01121C;
		border-width: 10px;
		margin-left: -10px;
	}
	&:before {
		border-color: rgba(194, 225, 245, 0);
		border-bottom-color: #01121C;
		border-width: 10px;
		margin-left: -10px;
	}
`;

/*******************************************
 * React Component
/******************************************/
class ProfilePanel extends React.Component {

	state = {
		display: "none"
	}

	getAvatar = () => {
		return this.props.user !== null ? this.props.user.avatar : user;
	}

	toggleSettingsPanel = () => {
		const display = this.state.display === "block" ? "none" : "block";
		return this.setState({ display });
	}

	logout = () => {
		cookies.expire('user');
		this.props.setUser(null);
		return this.props.history.push('/');
	}

	render() {
		return (
			<Wrapper>
				<Button click={this.toggleSettingsPanel} image={this.getAvatar()} />
				<PanelWrapper display={this.state.display} onClick={this.toggleSettingsPanel}>
					<SettingsPanel click={this.logout}>
						<PanelButton click={this.logout}>Logout</PanelButton>
					</SettingsPanel>
				</PanelWrapper>
			</Wrapper>
		)
	}
}

const mapProps = state => ({
	user: state.user
})

const mapDispatch = {
	setUser
}

export default withRouter(connect(mapProps, mapDispatch)(ProfilePanel));
