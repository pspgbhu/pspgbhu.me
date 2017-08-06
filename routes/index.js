const Router = require('koa-router');
const { getAllArticles } = require('../controller/articles.get');

const router = new Router();

router
  .get('/', async (ctx) => {
    await ctx.render('index', {
      title: 'Hello world',
    });
  })

  .get('/api/articlesList', getAllArticles)
;

module.exports = router;
