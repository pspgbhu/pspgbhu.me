module.exports = () => async (ctx, next) => {
  ctx.set({
    'Access-Control-Allow-Origin': ctx.request.header.origin,
  });
  await next();
};
