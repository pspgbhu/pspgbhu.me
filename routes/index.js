const Router = require('koa-router');
const essayGet = require('../controller/essay.get');

const router = new Router();

router
  .get('/', async (ctx) => {
    await ctx.render('index', {
      title: 'Hello world',
    });
  })

  .get('/essay', essayGet)
;

module.exports = router;
