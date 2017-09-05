const markdown = require('markdown').markdown;
const { Res } = require('../utils');

const {
  getArticlesList,
  getArticle,
  updateViews,
  createArticle,
} = require('../models/articles');


/**
 * To get Articles List
 */

exports.getArticlesList = async function (ctx) {
  let data;
  let res;

  try {
    data = await getArticlesList();
    res = Res({ data });
  } catch (error) {
    res = Res(2);
  }

  ctx.body = res;
};

/**
 * To get Article single or multiple
 */

exports.getArticle = async function (ctx) {
  if (!ctx.query.id) {
    ctx.body = Res(-1);
    return;
  }

  let data;
  let res;
  const ids = Array.from(new Set([...ctx.query.id]));

  try {
    await updateViews(ids);
    data = await getArticle(ids);
    res = Res({ data });
  } catch (error) {
    res = Res(2);
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

/**
 * To post an article
 */

exports.createArticle = async (ctx) => {
  let res;
  const { title, content = '', categories = '' } = ctx.request.body;

  // 过滤 title 参数
  if (title === undefined) {
    ctx.body = Res({ code: 1, message: 'title 不能为空' });
    return;
  }


};
