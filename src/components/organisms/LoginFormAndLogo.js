
/*******************************************
 * © 2018 Charlie Hay
 * ---------------------
 * LoginFormAndLogo
/******************************************/

/*******************************************
 * Node Modules
/******************************************/
import React from 'react';
import styled from 'styled-components';

/*******************************************
 * Local Imports
/******************************************/
import SessionLogo from '../../assets/images/logo.png';
import Image from '../atoms/Image';
import LoginForm from '../molecules/LoginForm';
import Span from '../atoms/Span';

/*******************************************
 * Styled Components
/******************************************/
const Wrapper = styled.div`
    height: 100vh;
    display:flex;
	align-items: center;
    justify-content: center;
	flex-direction: column;
	min-width: 300px;
	width: 100%;
	max-width: 500px;
	padding: 1rem;
	& > img { width: 80%; }
	& > * { margin: .5rem; }
`;

/*******************************************
 * React Component
/******************************************/
class LoginFormAndLogo extends React.PureComponent {
	render() {
		return (
			<Wrapper>
				<Image source={SessionLogo} width="100%" />
				<LoginForm />
				<Span text="&copy; 2018 Canadian Broadcasting Corporation" color='#fff' />
			</Wrapper>
		)
	}
}

export default LoginFormAndLogo;
