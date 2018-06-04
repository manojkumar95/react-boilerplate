import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from '../Login';
import AppNavSection from '../Navigation';
import AppFooterSection from '../../components/Footer';

/**
 * * Top level redirection to login page
 * Note : Do not use render with custom props in top level,
 * Specify the extra props if any in 'additionalProps' prop as an object
 * @param Component
 * @param userId
 * @param rest
 * @returns {*}
 * @constructor
 */
const RedirectRoute = ({
  component: Component, userId, ...rest
}) => (
  <Route
    {...rest}
    render={props => (
      <React.Fragment>
        {userId !== '' ?
          <React.Fragment>
            <AppNavSection />
            <Component {...props} />;
            <AppFooterSection />
          </React.Fragment>
          :
          <Login />
      }
      </React.Fragment>
    )}
  />
);

RedirectRoute.propTypes = {
  component: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  userId: state.user.get('userId')
});

export default connect(mapStateToProps)(RedirectRoute);
