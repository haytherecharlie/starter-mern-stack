/*******************************************
 * © 2018 Charlie Hay
 * ---------------------
 * Dashboard
/******************************************/

/*******************************************
 * Node Modules
/******************************************/
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

/*******************************************
 * Local Imports
/******************************************/
import Header from '../organisms/Header';
import Sidebar from '../organisms/Sidebar';

/*******************************************
 * Styled Components
/******************************************/
const AppWrapper = styled.div`
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	position: relative;
`;

const OverflowWrapper = styled.div`
	transition: .3s;
	height: 100vh;
	width: calc(100% + ${props => props.width}px);
	position: absolute;
	top: 0;
	left: -${props => props.offset}px;
	overflow: hidden;
`;

const SidebarWrapper = styled.div`
	height: 100%;
	width: ${props => props.width}px;
	float: left;
	position: relative;
	overflow: scroll;
`;

const MainWrapper = styled.div`
	height: 100%;
	width: calc(100% - ${props => props.width}px);
	float: right;
	position: relative;
`;

const PageWrapper = styled.div`
	display: block;
    height: calc(100% - 62px);
    margin-top: 62px;
    overflow: scroll;
`;

/*******************************************
 * React Component
/******************************************/
class App extends React.Component {
    render() {
        const sidebarWidth = 250;
        let offset = this.props.sidebar === "closed" ? sidebarWidth : 0;
        return (
            <AppWrapper>
                <OverflowWrapper offset={offset} width={sidebarWidth}>
                    <SidebarWrapper width={sidebarWidth}>
                        <Sidebar width={sidebarWidth} />
                    </SidebarWrapper>
                    <MainWrapper width={sidebarWidth}>
                        <Header />
                        <PageWrapper>{this.props.children}</PageWrapper>
                    </MainWrapper>
                </OverflowWrapper>
            </AppWrapper>
        )
    }
}

/*******************************************
 * Map State To Props
/******************************************/
const mapState = (state) => ({
    sidebar: state.sidebar,
});

/*******************************************
 * Map Dispatch To Props
/******************************************/
const mapDispatch = {}

export default connect(mapState, mapDispatch)(App);
