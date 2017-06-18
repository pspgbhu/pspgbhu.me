const { getAll } = require('../models/essay');


module.exports = async function (ctx) {
  const content = await getAll();
  ctx.body = content;
};
