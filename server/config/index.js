process.env.NODE_ENV = process.env.npm_lifecycle_event === 'start'
  ? 'production'
  : 'development';

module.exports = process.env.NODE_ENV === 'produciton'
  ? require('./config.prod.js')
  : require('./config.dev.js');
