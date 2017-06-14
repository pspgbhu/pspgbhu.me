const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  ctx.body = 'adfasdf World';
});

app.listen(3000);
