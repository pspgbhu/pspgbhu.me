const pool = require('../db/init');

module.exports = class Db {
  constructor(sql, callback) {
    this.sql = sql;
    this.callback = callback;
    this._query();
  }

  _query() {
    const sql = this.sql;
    const callback = this.callback;

    pool.getConnection((err, connection) => {
      if (err) {
        callback(err);
        connection.release();
        return;
      }

      connection.query(sql, (err, res, fields) => {

        if (err) {
          callback(err);
          connection.release();
          return;
        }
        callback(res, fields);
        connection.release();
      });
    });
  }
};
