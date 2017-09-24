const {
  Res,
  Log,
  reformatArticlesList,
} = require('../utils');
const {
  getArticlesList,
  getArticle,
  createArticle,
  updateViews,
  updateArticle,
  deleteArticle,
} = require('../models/articles');

const log = new Log('controller').log;

/**
 * To get Articles List
 */

exports.getArticlesList = async function (ctx) {
  let data;
  try {
    data = await getArticlesList();
  } catch (e) {
    console.error(e);
    ctx.body = Res(2);
    return;
  }

  data.forEach((item, index) => {
    data[index].created_time = item.created_time.toLocaleDateString();
    data[index].last_modified_time = item.last_modified_time.toLocaleDateString();
  });

  const res = Res({ data });
  ctx.body = res;
};


exports.getFormatedArticlesList = async function (ctx) {
  let data;
  try {
    data = await getArticlesList();
  } catch (e) {
    console.error(e);
    ctx.body = Res(2);
    return;
  }
  const res = Res({ data: reformatArticlesList(data) });
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
  const ids = Array.from(new Set([...ctx.query.id]));

  try {
    await updateViews(ids);
    data = await getArticle(ids);
  } catch (e) {
    console.error(e);
    ctx.body = Res(2);
    return;
  }

  // reformat time of data
  data.forEach((item, index) => {
    data[index].created_time = item.created_time.toLocaleDateString();
    data[index].last_modified_time = item.last_modified_time.toLocaleDateString();
  });

  const res = Res({ data });
  log('getArticle', 'res === \n', res);
  ctx.body = res;
};

/**
 * To post an article
 */

exports.createArticle = async (ctx) => {
  const { title, content, categories } = ctx.request.body;

  // 过滤 title 参数
  if (title === undefined) {
    ctx.body = Res({ code: 1, message: 'title 不能为空' });
    return;
  }

  log('createArticle', `
    title === ${title}
    content === ${content}
    categories === ${categories}`);

  try {
    await createArticle({ title, content, categories });
  } catch (e) {
    console.log(e);
    ctx.body = Res(2);
    return;
  }

  ctx.body = Res();
};

/**
 * Update an article
 */

exports.updateArticle = async (ctx) => {
  const { id, title, content, categories } = ctx.request.body;

  if (id === undefined) {
    ctx.body = Res({ code: 1, message: '缺少 id 参数' });
  }

  try {
    await updateArticle({ id, title, content, categories });
  } catch (e) {
    log('updateArticle', e);
    ctx.body = Res(2);
    return;
  }

  ctx.body = Res();
};

/**
 * Delete an article
 */

exports.deleteArticle = async (ctx) => {
  const { id } = ctx.request.body;

  if (id === undefined) {
    ctx.body = Res(1);
    return;
  }

  try {
    await deleteArticle(id);
  } catch (e) {
    console.error(e);
    ctx.body = Res({ code: 2, message: e.message });
    return;
  }

  ctx.body = Res();
};
