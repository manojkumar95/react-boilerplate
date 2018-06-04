import BaseAction from './BaseAction';
import constants from '../constants/repoAction';

class ReposActions extends BaseAction {
  constructor() {
    super({
      fetchRepos: {
        type: constants.FETCH_REPOS,
        params: ['username']
      },
      fetchReposSuccess: {
        type: constants.FETCH_REPOS_SUCCESS,
        params: ['repositories']
      },
      fetchReposError: {
        type: constants.FETCH_REPOS_ERROR,
        params: ['error']
      }
    });
  }
}

export default new ReposActions();
