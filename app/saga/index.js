import { takeLatest } from 'redux-saga/effects';
import actionConstants from '../constants/repoAction';
import userActions from '../constants/userAction';
import { fetchRepositories } from './repoSaga';
import { loginUser, logoutUser } from './userSaga';

export default function* saga() {
  yield takeLatest(actionConstants.FETCH_REPOS, fetchRepositories);
  yield takeLatest(userActions.USER_LOGIN, loginUser);
  yield takeLatest(userActions.LOGOUT_USER, logoutUser);
}
