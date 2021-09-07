import { fromJS } from 'immutable';

import userActions from '../constants/userAction';

const initialState = fromJS({
  loading: false,
  userId: ''
});

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActions.UPDATE_USER_ID:
      return state.set('userId', action.userId);
    case userActions.USER_LOGIN:
      return state.set('loading', true);
    case userActions.USER_LOGIN_SUCCESS:
      return state
        .set('loading', false)
        .set('userId', action.userId);
    case userActions.USER_LOGIN_ERROR:
      return state.set('loading', false);
    case userActions.LOAD_USER:
      return state.set('userId', action.userId);
    default:
      return state;
  }
};

export default userReducer;
