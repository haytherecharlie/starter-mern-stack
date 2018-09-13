
/*******************************************
 * © 2018 Charlie Hay
 * ---------------------
 * Loading
/******************************************/

/*******************************************
 * Node Modules
/******************************************/
import React from 'react';
import styled from 'styled-components';

/*******************************************
 * Local Imports
/******************************************/
import loading from '../../assets/images/loading.gif';

/*******************************************
 * Styled Components
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
 * React Component
/******************************************/
class Loading extends React.PureComponent {
	render() {
        return this.props.status
            ? <Wrapper><Spinner src={loading} /></Wrapper>
			: <React.Fragment>{this.props.children}</React.Fragment>
	}
}

export default Loading;
