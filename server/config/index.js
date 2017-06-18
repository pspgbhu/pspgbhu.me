process.env.NODE_ENV = process.env.npm_lifecycle_event === 'start'
  ? 'production'
  : 'development';

const status = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';
const config = `./config.${status}.js`;
module.exports = require(config);
