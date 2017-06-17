const Koa = require('koa');
const api = require('./api');
const port = require('./config').port;

const app = new Koa();

// 初始化路由中间件
app.use(api.routes()).use(api.allowedMethods());

app.listen(port, () => {
  console.log(`Listening the t ${port}`);
});
