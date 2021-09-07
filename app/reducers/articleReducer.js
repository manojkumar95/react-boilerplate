import { ADD_ARTICLE } from '../constants/articleAction';

const articleReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return [...state, action.article];
    default:
      return state;
  }
};

export default articleReducer;
