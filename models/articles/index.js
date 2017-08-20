const querystring = require('querystring');
const mysql = require('mysql');
const db = require('../../db');
const { addYearLastPost } = require('../../utils');

module.exports = {

  /**
   *  Get all article
   */

  async allArticles() {
    const data = await db('SELECT * FROM articles');
    return addYearLastPost(data);
  },

  /**
   * Get Articles List
   */

  async articlesList() {
    const data = await db('SELECT id, title, created_time FROM articles');
    return addYearLastPost(data);
  },

  /**
   * Get Article single or multiple
   */

  async article(...ids) {
    if (ids.length === 0) {
      return false;
    }
    const escapedIds = ids.map(item => mysql.escape(item));
    const sql = `SELECT * FROM articles
      WHERE id in (${ids.join(',')})`;

    const data = await db(sql);
    return data;
  },
};
