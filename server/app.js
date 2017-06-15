const Koa = require('koa');

const app = new Koa();

app.use(ctx => {
  ctx.body = 'Hellow World';
});

app.listen(3000);
