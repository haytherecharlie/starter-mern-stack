/* @flow */
/*******************************************
 * 
 * ---------------------
 * LANDING COMPONENT
/******************************************/

/*******************************************
 * NODE_MODULES
/******************************************/
import React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

/*******************************************
 * LOCAL IMPORTS
/******************************************/
// import * as userActions from '../redux/user/actions';

/*******************************************
 * REACT COMPONENT
/******************************************/
class Landing extends React.PureComponent {
    render() {
        return (
            <div className="container Landing">
                !React Application!
            </div>
        )
    }
}

/*******************************************
 * MAP STATE TO PROPS
/******************************************/
// function mapStateToProps(state) {
//     return {
//         email: state.email,
//     };
// }

/*******************************************
* MAP DISPATCH TO PROPS
/******************************************/
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(userActions, dispatch);
// }

/*******************************************
 * CONNECT
/******************************************/
// export default connect(mapStateToProps, mapDispatchToProps)(Landing);
export default Landing;
