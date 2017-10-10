const Koa = require('koa');
const path = require('path');

// middleware
const serve = require('koa-static');
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const cors = require('./middleware/cors');

// router
const route = require('./routes/index');

const app = new Koa();

// error handler
onerror(app);

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text'],
}));
app.use(json());
app.use(logger());
app.use(serve(path.join(__dirname, 'public')));

app.use(views(path.join(__dirname, 'views'), {
  extension: 'ejs',
}));

// Add 'Access-Control-Allow-Origin'
app.use(cors());

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// router
app
  .use(route.routes())
  .use(route.allowedMethods())
;

module.exports = app;
