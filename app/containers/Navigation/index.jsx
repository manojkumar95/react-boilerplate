import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import UserActions from '../../actions/user';

const Navigation = props => (
  <nav>
    <ul>
      <li><NavLink exact to="/todo">Todo</NavLink></li>
      <li><NavLink exact to="/repos">GitHub</NavLink></li>
      <li> <div role="presentation" onClick={() => props.onLogout()}> Logout </div> </li>
    </ul>
  </nav>
);

Navigation.propTypes = {
  onLogout: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(UserActions.onLogoutUser())
});

export default connect(null, mapDispatchToProps)(Navigation);
