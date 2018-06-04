import axios from 'axios';

export default class RepoService {
  static getRepos = username => axios({
    method: 'get',
    url: `https://api.github.com/users/${username}/repos?type=all&sort=updated`
  });
}
