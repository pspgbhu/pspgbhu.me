const Koa = require('koa');

const app = new Koa();

if (process.env.npm_lifecycle_event === 'start') {
  process.env.NODE_ENV = 'production';
} else {
  process.env.NODE_ENV = 'development';
}

app.use(ctx => {
  ctx.body = 'Hellow World';
});

app.listen(3000);
