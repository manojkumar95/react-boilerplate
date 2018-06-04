import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import storage from '../../globals/localStorage';
import AppSection from '../Routes/index';
import UserActions from '../../actions/user';
import '../../../assets/styles/components/App.scss';

class App extends React.Component {
  componentDidMount() {
    if (storage.getItem('user')) {
      this.props.loadUserDetails(storage.getItem('user'));
    }
  }

  render() {
    return (
      <AppSection />
    );
  }
}

App.propTypes = {
  loadUserDetails: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  loadUserDetails: userId => dispatch(UserActions.onAppLoad(userId))
});

export default withRouter(connect(null, mapDispatchToProps)(App));
