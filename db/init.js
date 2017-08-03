const mysql = require('mysql');
const CONFIG = require('../config').db;

module.exports = mysql.createPool(CONFIG);
