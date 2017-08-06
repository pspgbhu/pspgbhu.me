const { allArticles } = require('../models/articles');

exports.getAllArticles = async function (ctx) {
  const content = await allArticles();
  ctx.body = content;
};
