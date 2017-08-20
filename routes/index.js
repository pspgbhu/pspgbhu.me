const Router = require('koa-router');
const { getArticlesList, getArticle } = require('../controller/articles');

const router = new Router();

router
  .get('/', async (ctx) => {
    await ctx.render('index', {
      title: 'Hello world',
    });
  })

  .get('/api/articlesList', getArticlesList)

  .get('/api/article', getArticle)
;

module.exports = router;
