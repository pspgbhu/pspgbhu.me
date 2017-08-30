module.exports = () => async (ctx, next) => {
  ctx.set({
    'Access-Control-Allow-Origin': 'http://localhost:8111',
  });
  await next();
};
