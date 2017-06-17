const db = require('./Db');


module.exports = {

  /**
   *  Get one essay
   *  @return {Promise}
   */

  async getOne() {
    const sql = 'SELECT * FROM essay';
    const result = await db(sql);
    return result;
  },
};
