import { combineReducers } from 'redux';
import articleReducer from './articleReducer';
import demoReducer from './repoReducer';
import userReducer from './userReducer';

export default combineReducers({
  articles: articleReducer,
  demo: demoReducer,
  user: userReducer
});
