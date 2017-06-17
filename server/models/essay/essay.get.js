const db = require('../Db');


module.exports = {

  /**
   *  Get all essay
   *  @return {Promise}
   */

  async getAll() {
    const sql = 'SELECT * FROM essay';
    const result = await db(sql);
    return result;
  },
};
