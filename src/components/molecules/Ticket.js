
/*******************************************
 * © 2018 Charlie Hay
 * ---------------------
 * Ticket
/******************************************/

/*******************************************
 * Node Modules
/******************************************/
import React from 'react';
import styled from 'styled-components';

/*******************************************
 * Local Imports
/******************************************/

/*******************************************
 * Styled Components
/******************************************/
const Wrapper = styled.div`
	display:flex;
	border: 1px solid #ccc;
	border-radius: 5px;
	padding: 1rem;
	flex: 1 1 500px;
	margin: 1rem;
	box-shadow: 0 0 20px #000;
	background: rgba(0,0,0,0.2);
`;

const DevWrapper = styled.div`
	height: 100%;
	width: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const DevAvatar = styled.img`
	height: 48px;
	width: 48px;
	border-radius: 50%;
`;

const DevName = styled.div`
	font-size: 0.5rem;
	text-align: center;
	color: #777;
	line-height: .6rem;
	margin-top: .5rem;
`;

const ContentWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: calc(100% - 50px);
	height: 100%;
	padding-left: 1rem;
`;

const Title = styled.div`
	color: rgba(255, 255, 255, 0.7);
    text-align: center;
	text-transform: uppercase;
	// font-family: NeoSansBlack;
	letter-spacing: 2px;
	font-weight: 500;
	margin: 0; padding: 0;
	font-size: 1.6rem;
`;

/*******************************************
 * React Component
/******************************************/
class Ticket extends React.PureComponent {
	render() {
		return (
			<Wrapper>
				<DevWrapper>
					<DevAvatar src={this.props.avatar} />
					<DevName>{this.props.assignee}</DevName>
				</DevWrapper>
				<ContentWrapper>
					{/* <Span color="red" text={this.props.link}/> */}
					<Title>{this.props.title}</Title>
					{/* <Span color="orange" text={this.props.description}/> */}
				</ContentWrapper>
			</Wrapper>
				)
			}
		}

		export default Ticket;
