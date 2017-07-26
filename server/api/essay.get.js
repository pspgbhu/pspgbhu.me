const { getAll } = require('../models/essay');


module.exports = async function (ctx) {
  console.log(ctx.params);
  const content = await getAll();
  ctx.body = content;
};
