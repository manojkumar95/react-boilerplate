import {
  // call,
  put
} from 'redux-saga/effects';

import storage from '../globals/localStorage';
import UserActions from '../actions/user';
// import UserService from '../service/user';

function* loginUser() {
  try {
    // const { username, password } = action;
    // const response = yield call(UserService.loginUser, username, password);
    storage.setItem('user', '8573485734989');
    storage.setItem('accessToken', 's9duf9sudf9sudf');
    yield put(UserActions.onLoginUserSuccess('8573485734989'));
  } catch (e) {
    yield put(UserActions.onLoginUserError(e));
  }
}

function* logoutUser() {
  try {
    // yield call(UserService.logout);
    yield put(UserActions.onAppLoad(''));
    storage.deleteItem('user');
    storage.deleteItem('accessToken');
  } catch (e) {
    console.log('Error on Logout :: ', e);
  }
}

module.exports = {
  loginUser,
  logoutUser
};
