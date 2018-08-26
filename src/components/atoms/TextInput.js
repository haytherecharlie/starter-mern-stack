/* @flow */
/*******************************************
 * © 2018 CBC
 * ---------------------
 * TextInput
/******************************************/

/*******************************************
 * NODE_MODULES
/******************************************/
import React from 'react';
import styled from 'styled-components';

/*******************************************
 * LOCAL IMPORTS
/******************************************/

/*******************************************
 * STYLED COMPONENTS
/******************************************/
const Input = styled.input`
	width: 100%;
	border: 1px solid #FFF;
	background: rgba(255, 255, 255, 0.1);
	padding: .5rem;
	text-align: center;
	color: #fff;
	&::placeholder {
		color: rgba(255, 255, 255, 0.6);
	}
`;

/*******************************************
 * REACT COMPONENT
/******************************************/
class TextInput extends React.PureComponent {
    render() {
        return (
			<Input placeholder={this.props.placeholder} onChange={this.props.handleText} type={this.props.type} />
		)
    }
}

export default TextInput;
