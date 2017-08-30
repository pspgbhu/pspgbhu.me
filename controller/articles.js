const markdown = require('markdown').markdown;

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

//
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

  // 查询成功时，有服务端转 markdown 为 html 添加进 response 中
  if (res.code === 0) {
    for (let i = 0; i < res.data.length; i += 1) {
      const content = res.data[i].content;
      res.data[i].htmlContent = markdown.toHTML(content);
    }
  }

  ctx.body = res;
};
