import BaseAction from './BaseAction';
import constants from '../constants/userAction';

class UserAction extends BaseAction {
  constructor() {
    super({
      onLoginUser: {
        type: constants.USER_LOGIN,
        params: ['username', 'password']
      },
      onLoginUserSuccess: {
        type: constants.USER_LOGIN_SUCCESS,
        params: ['userId']
      },
      onLoginUserError: {
        type: constants.USER_LOGIN_ERROR,
        params: ['error']
      },
      onLogoutUser: {
        type: constants.LOGOUT_USER,
        params: []
      },
      onAppLoad: {
        type: constants.LOAD_USER,
        params: ['userId']
      }
    });
  }
}

export default new UserAction();
