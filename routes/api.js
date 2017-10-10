const router = require('koa-router')();
const {
  getArticlesList,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle,
} = require('../controller/articles');

router
  .get('/api/articlesList', getArticlesList)
  .get('/api/getFormatedArticlesList', getArticlesList)
  .get('/api/article', getArticle)
  .post('/api/createArticle', createArticle)
  .post('/api/updateArticle', updateArticle)
  .post('/api/deleteArticle', deleteArticle)
;

module.exports = router;
