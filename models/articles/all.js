const db = require('../../db/db');


module.exports = {

  /**
   *  Get all article
   *  @return {Promise}
   */

  async allArticles() {
    const sql = 'SELECT * FROM articles';
    const result = await db(sql);
    return addYearLastPost(result);
  },
};

/**
 * Add isYearLast property to allAritcles response data.
 */

function addYearLastPost(allArticles) {
  const years = [];

  const result = allArticles.map((item, index) => {
    const year = new Date(item.created_time).getFullYear();
    const isYearLast = !isHasInArr(year, years);
    years.push(year);
    return Object.assign({ isYearLast }, item);
  });

  return result;
}

function isHasInArr(target, arr) {
  const set = new Set(arr);
  const oldSize = set.size;
  set.add(target);
  const newSize = set.size;
  return oldSize === newSize;
}
