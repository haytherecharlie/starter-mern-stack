
/*******************************************
 * © 2018 Charlie Hay
 * ---------------------
 * NotFound
/******************************************/

/*******************************************
 * Node Modules
/******************************************/
import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

/*******************************************
 * Local Imports
/******************************************/
import notFound from '../../assets/images/notFound.png';
import Image from '../atoms/Image';

/*******************************************
 * Styled Components
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
 * React Component
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
