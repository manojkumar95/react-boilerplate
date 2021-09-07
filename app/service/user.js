import axios from 'axios/index';

export default class UserService {
  static loginUser(username, password) {
    console.log('password :: ', username, password);
    return axios({
      method: 'post',
      url: '/Users/login',
      data: {
        mobile_no: username,
        password
      }
    });
  }

  static logout() {
    return axios({
      method: 'post',
      url: '/Users/logout'
    });
  }
}
