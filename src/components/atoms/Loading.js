/* @flow */
/*******************************************
 * © 2018 CBC
 * ---------------------
 * Loading
/******************************************/

/*******************************************
 * NODE_MODULES
/******************************************/
import React from 'react';
import styled from 'styled-components';

/*******************************************
 * LOCAL IMPORTS
/******************************************/
import loading from '../../assets/images/loading.gif';

/*******************************************
 * STYLED COMPONENTS
/******************************************/
const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Spinner = styled.img`
	height: 50px;
`;

/*******************************************
 * REACT COMPONENT
/******************************************/
class Loading extends React.PureComponent {
	render() {
        return this.props.status
            ? <Wrapper><Spinner src={loading} /></Wrapper>
			: <React.Fragment>{this.props.children}</React.Fragment>
	}
}

export default Loading;
