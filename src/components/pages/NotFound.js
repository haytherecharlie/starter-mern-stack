/* @flow */
/*******************************************
 * © 2018 CBC
 * ---------------------
 * NotFound
/******************************************/

/*******************************************
 * NODE_MODULES
/******************************************/
import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

/*******************************************
 * LOCAL IMPORTS
/******************************************/
import notFound from '../../assets/images/notFound.png';
import Image from '../atoms/Image';

/*******************************************
 * STYLED COMPONENTS
/******************************************/
const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
	flex-direction: row;
	color: #FFF;
`;

/*******************************************
 * REACT COMPONENT
/******************************************/
class NotFound extends React.Component {

	componentDidMount() {
		setTimeout(() => this.props.history.push('/'), 3000);
	}

	render() {
		return (
			<Wrapper>
                <Image height="200" width="130" source={notFound} />
				<h1>Page Not <br/> Found!</h1>
			</Wrapper>
		)
	}
}

export default withRouter(NotFound);
