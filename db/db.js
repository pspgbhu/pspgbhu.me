const mysql = require('mysql');
const CONFIG = require('../config').db;

const pool = mysql.createPool(CONFIG);


/**
 *  query db
 */

function dbQuery(sql, callback) {

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

      callback(null, res);
      connection.release();
    });
  });
}

/**
 *  wrap to promise
 */

function db(sql) {

  return new Promise((resolve, reject) => {

    dbQuery(sql, (err, res) => {

      if (err) {
        reject(err);
      }

      resolve(res);
    });
  });
}


module.exports = db;
