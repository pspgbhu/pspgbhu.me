const querystring = require('querystring');
const mysql = require('mysql');
const db = require('../../db');
const {
  Log,
} = require('../../utils');

const log = new Log('models').log;

/**
 * To get all article
 */

exports.getAllArticles = async () => {
  const data = await db('SELECT * FROM articles WHERE deleted = 0');
  return data;
};

/**
 * To get Articles List
 */

exports.getArticlesList = async () => {
  const data = await db('SELECT id, title, created_time, last_modified_time, views FROM articles WHERE deleted = 0');
  return data;
};

/**
 * To get Article single or multiple
 */

exports.getArticle = async (...ids) => {
  if (ids.length === 0) {
    return false;
  }
  const escapedIds = ids.map(item => mysql.escape(item));
  const sql = `SELECT * FROM articles
    WHERE id in (${ids.join(',')})`;

  const data = await db(sql);
  return data;
};

/**
 * To update article views number
 */

exports.updateViews = async (...ids) => {
  const sql = `UPDATE articles SET views = views + 1 WHERE id IN (${ids.join(',')})`;
  await db(sql);
};

/**
 * To post an article
 */

exports.createArticle = async (params) => {
  const { title, content, categories } = params;

  const keySQL = [];
  const valueSQL = [];
  ['title', 'content', 'categories'].forEach(key => {
    if (params[key] !== undefined) {
      keySQL.push(key);
      valueSQL.push(params[key]);
    }
  });
  log('createArticle', `keySQL === ${keySQL} | valueSQL === ${valueSQL}`);

  const stringifyValueSQL = valueSQL.map(value => `"${value.toString()}"`);
  const sql = `INSERT INTO articles (${keySQL.join(',')})
    VALUES (${stringifyValueSQL.join(',')});`;
  log('createArticle', `sql === ${sql}`);

  try {
    await db(sql);
  } catch (e) {
    throw new Error(e);
  }
};

/**
 * To update an article
 */

exports.updateArticle = async (params) => {
  const setSQL = [];
  if (params.id === undefined) {
    throw new Error('[models >>> updateArticle] params.id === undefined');
  }

  ['title', 'content', 'categories'].forEach(key => {
    if (params[key] !== undefined) {
      setSQL.push(`${key} = "${params[key]}"`);
    }
  });

  const sql = `UPDATE articles SET ${setSQL.join(',')} WHERE id = ${params.id};`;

  console.log(`[models >>> updateArticle] sql === ${sql}`);
  await db(sql);
};

/**
 * To delete an article
 *
 * 从 article 表移动到 spam 表
 */

exports.deleteArticle = async (id) => {
  if (id === undefined) {
    throw new Error('[models >>> deleteArticle] id === undefined');
  }

  const sql = `UPDATE articles SET deleted = 1 WHERE id = ${id}`;
  console.log(`[models >>> deleteArticle] sql === ${sql}`);
  await db(sql);
};
