
/*******************************************
 * © 2018 Charlie Hay
 * ---------------------
 * LoginForm
/******************************************/

/*******************************************
 * Node Modules
/******************************************/
import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import cookies from 'cookies-js';

/*******************************************
 * Local Imports
/******************************************/
import Span from '../atoms/Span';
import TextInput from '../atoms/TextInput';
import SubmitButton from '../atoms/SubmitButton';
import fetchLogin from '../../lib/helpers/FetchLogin';

/*******************************************
 * Styled Components
/******************************************/
const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	& > * {
		margin: .5rem;
		border-radius: 15px;
	}
`;

/*******************************************
 * React Component
/******************************************/
class LoginForm extends React.Component {

	state = {
		username: "",
		password: "",
		loginErrorMsg: ""
	}

	login = async () => {
		const request = await fetchLogin(this.state.username, this.state.password);
		return request.status === 200 ? this.handleSuccess(request) : this.handleFailure(request);
	}

	handleSuccess = (request) => {
		cookies.set('user', JSON.stringify(request.payload), { path: '/', expires: Infinity });
		return this.props.history.push(`/dashboard?team="PRFD"&metric="in-progress"`);
	}

	handleFailure = (request) => {
		return this.setState({ loginErrorMsg: request.message });
	}

	render() {
		return (
			<Wrapper>
				<TextInput
					placeholder="Username"
					handleText={e => this.setState({ username: e.target.value, loginErrorMsg: "" })}
					type="text" />
				<TextInput
					placeholder="Password"
					handleText={e => this.setState({ password: e.target.value, loginErrorMsg: "" })}
					onKeyPress={e => e.key === 'Enter' ? this.login() : null}
					type="password" />
				<Span text={this.state.loginErrorMsg} color='rgba(239, 79, 101, 1)' />
				<SubmitButton label="Login" click={this.login} />
			</Wrapper>
		)
	}
}

export default withRouter(LoginForm);
