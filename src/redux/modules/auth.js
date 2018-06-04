import { SubmissionError } from 'redux-form';
import cookie from 'js-cookie';

const LOAD = 'redux-example/auth/LOAD';
const LOAD_SUCCESS = 'redux-example/auth/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/auth/LOAD_FAIL';
const LOGIN = 'redux-example/auth/LOGIN';
const LOGIN_SUCCESS = 'redux-example/auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'redux-example/auth/LOGIN_FAIL';
const REGISTER = 'redux-example/auth/REGISTER';
const REGISTER_SUCCESS = 'redux-example/auth/REGISTER_SUCCESS';
const REGISTER_FAIL = 'redux-example/auth/REGISTER_FAIL';
const LOGOUT = 'redux-example/auth/LOGOUT';
const LOGOUT_SUCCESS = 'redux-example/auth/LOGOUT_SUCCESS';
const LOGOUT_FAIL = 'redux-example/auth/LOGOUT_FAIL';

const initialState = {
  loaded: false,
  user: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        accessToken: action.result.accessToken,
        user: action.result
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    case LOGIN:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        loaded: true,
        isLogin: true,
        accessToken: action.result.id
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loggingIn: false,
        isLogin: false,
        loginError: action.error
      };
    case REGISTER:
      return {
        ...state,
        registeringIn: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registeringIn: false
      };
    case REGISTER_FAIL:
      return {
        ...state,
        registeringIn: false,
        registerError: action.error
      };
    case LOGOUT:
      return {
        ...state,
        loggingOut: true
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggingOut: false,
        accessToken: null,
        user: null
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        loggingOut: false,
        logoutError: action.error
      };
    default:
      return state;
  }
}

const catchValidation = error => {
  if (error.message) {
    if (error.message === 'Validation failed' && error.data) {
      throw new SubmissionError(error.data);
    }
    throw new SubmissionError({ _error: error.message });
  }
  return Promise.reject(error);
};

function setCookie() {
  return async response => {
    const options = undefined;
    cookie.set('feathers-jwt', response.id, options);
  };
}

function getCookie(name) {
  const documentCookie = document.cookie.split('; ');
  const cookies = {};
  for (let i = documentCookie.length - 1; i >= 0; i -= 1) {
    const [a, b] = documentCookie[i].split('=');
    cookies[a] = b;
  }
  return cookies[name];
}

function setToken({ client, restApp }) {
  return response => {
    const { id } = response;
    if (!id) {
      document.cookie = `feathers-jwt=;expires= ${new Date(0)}`;
    } else {
      restApp.set('accessToken', id);
      client.setJwtToken(id);
    }
  };
}

function setUser({ restApp }) {
  return response => {
    restApp.set('user', response.user);
  };
}

/*
* Actions
* * * * */

export function isLoaded(globalState) {
  return globalState.auth && globalState.auth.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: async ({ client }) => {
      let response = '';
      const tocken = client.getJwtToken();
      if (tocken) {
        response = await client.get(`/api/AccessTokens/${tocken}/user`);
        response.accessToken = tocken;
      }
      return response;
    }
  };
}

export function register(data) {
  return {
    types: [REGISTER, REGISTER_SUCCESS, REGISTER_FAIL],
    promise: ({ client }) => client.post('/api/users', data)
  };
}

export function login(strategy, data) {
  return {
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
    promise: async ({ client, restApp }) => {
      try {
        console.log('data ---> ', data);
        data.brokerid = 'aaaa';
        console.log('data ---> ', data);
        const response = await client.post('/login', data);
        await setCookie()(response);
        await setToken({ client, restApp })(response);
        setUser({ restApp })(response);
        return response;
      } catch (error) {
        if (strategy === 'local') {
          return catchValidation(error);
        }
        throw error;
      }
    }
  };
}

export function logout() {
  return {
    types: [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL],
    promise: async ({ client, restApp }) => {
      let jwtToken = client.getJwtToken();
      if (!jwtToken && document.cookie) {
        jwtToken = getCookie('feathers-jwt');
      }
      await client.post(`api/users/logout?access_token=${jwtToken}`);
      await setToken({ client, restApp })({ accessToken: null });
    }
  };
}
