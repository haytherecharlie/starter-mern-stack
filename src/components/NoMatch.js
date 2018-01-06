import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import * as userActions from '../redux/user/actions';

class NoMatch extends React.PureComponent {
    render() {
        return (
            <div>!React Application!</div>
        )
    }
}

function mapStateToProps(state) {
    return {
      email: state.email,
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(userActions, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(NoMatch);
