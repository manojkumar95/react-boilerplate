import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import LoginForm from 'components/LoginForm/LoginForm';
import * as authActions from 'redux/modules/auth';
import * as notifActions from 'redux/modules/notifs';

@connect(
  state => ({
    user: state.auth.user,
    accessToken: state.auth.accessToken,
    isLogin: state.auth.isLogin
  }),
  { ...notifActions, ...authActions }
)
export default class Login extends Component {
  static propTypes = {
    user: PropTypes.shape({
      email: PropTypes.string
    }),
    accessToken: PropTypes.string,
    isLogin: PropTypes.bool,
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    notifSend: PropTypes.func.isRequired,
    load: PropTypes.func.isRequired
  };

  static defaultProps = {
    user: null,
    accessToken: null,
    isLogin: false
  };

  static contextTypes = {
    router: PropTypes.object
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.accessToken && this.props.isLogin && !this.props.user) {
      this.props.load();
    }
  }

  login = async data => {
    const result = await this.props.login('local', data);
    this.successLogin();
    return result;
  };

  successLogin = () => {
    this.props.notifSend({
      message: "You'r logged !",
      kind: 'success',
      dismissAfter: 2000
    });
  };

  render() {
    const { user, logout } = this.props;
    return (
      <div className="container">
        <Helmet title="Login" />
        <h1>Login</h1>
        {!user && (
          <div>
            <LoginForm onSubmit={this.login} />
            <p>This will "log you in" as this user, storing the username in the session of the API server.</p>
          </div>
        )}
        {user && (
          <div>
            <p>You are currently logged in as {user.email}.</p>
            <div>
              <button className="btn btn-danger" onClick={logout}>
                <i className="fa fa-sign-out" /> Log Out
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
