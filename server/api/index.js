const Router = require('koa-router');
const essayGet = require('./essay.get');

const router = new Router();

router
  .get('/essay', essayGet);


module.exports = router;
