const Router = require('koa-router');
const essayGet = require('../controller/essay.get');

const router = new Router();

router
  .get('/', async (ctx) => {
    await ctx.render('index', {
      title: 'Hello world',
    });
  })

  .get('/api/articleList', essayGet)
;

module.exports = router;
