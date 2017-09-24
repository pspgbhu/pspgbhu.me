const Router = require('koa-router');
const {
  getArticlesList,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle,
} = require('../controller/articles');

const router = new Router();

router
  .get('/', async (ctx) => {
    await ctx.render('index', {
      title: 'Hello world',
    });
  })

  /**
   * To get article list
   */

  .get('/api/articlesList', getArticlesList)

  /**
   * get article list formated by time
   */

  .get('/api/getFormatedArticlesList', getArticlesList)

  /**
   * To get an article.
   * Accept multiple id param.
   *
   * @param id
   */

  .get('/api/article', getArticle)

  /**
   * To post an article
   *
   * @param title
   * @param content
   * @param tag
   */
  .post('/api/createArticle', createArticle)

  /**
   * Update an article
   *
   * @param id
   * @param anyUpdateProp
   */
  .post('/api/updateArticle', updateArticle)

  /**
   * Update an article
   *
   * @param id
   */
  .post('/api/deleteArticle', deleteArticle);
;

module.exports = router;
