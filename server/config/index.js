module.exports = process.env.NODE_ENV === 'produciton'
  ? require('./config.prod.js')
  : require('./config.dev.js');
