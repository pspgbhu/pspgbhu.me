const Router = require('koa-router');
const { getArticlesList, getArticle, createArticle } = require('../controller/articles');

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
  .post('/api/createArticle', createArticle);
;

module.exports = router;
