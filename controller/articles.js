const { articlesList, article } = require('../models/articles');
const { Res, resProxy } = require('../utils');

exports.getArticlesList = async function (ctx) {
  let data;
  let res;

  try {
    data = await articlesList();
    res = resProxy({ data });
  } catch (error) {
    res = resProxy(2);
  }

  ctx.body = res;
};

exports.getArticle = async function (ctx) {
  if (!ctx.query.id) {
    ctx.body = resProxy(-1);
    return;
  }

  let data;
  let res;
  const ids = Array.from(new Set([...ctx.query.id]));

  try {
    data = await article(ids);
    res = resProxy({ data });
  } catch (error) {
    res = resProxy(2);
  }

  ctx.body = res;
};
