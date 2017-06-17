const Router = require('koa-router');
const essayGet = require('./essayGet');

const router = new Router();

router
  .get('/essay', essayGet);


module.exports = router;
