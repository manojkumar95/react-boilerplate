import { call, put } from 'redux-saga/effects';
import RepoService from '../service/repo';
import ReposActions from '../actions/Repos';
import ERRORS from '../globals/errorConstants';

function* fetchRepositories(action) {
  try {
    const repositories = yield call(RepoService.getRepos, action.username);
    yield put(ReposActions.fetchReposSuccess(repositories));
  } catch (error) {
    if (error.name === ERRORS.NOT_FOUND.name) {
      yield put(ReposActions.fetchReposError('Username not identified in Github'));
    } else {
      yield put(ReposActions.fetchReposError(error.message));
    }
  }
}

module.exports = {
  fetchRepositories
};
