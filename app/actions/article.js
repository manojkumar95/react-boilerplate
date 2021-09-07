import constants from '../constants/articleAction';
import BaseAction from './BaseAction';

class ArticleAction extends BaseAction {
  constructor() {
    super({
      addArticle: {
        type: constants.ADD_ARTICLE,
        params: ['article']
      }
    });
  }
}

export default new ArticleAction();
