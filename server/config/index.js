module.exports = process.env === 'produciton'
  ? require('./config.prod.js')
  : require('./config.dev.js');
