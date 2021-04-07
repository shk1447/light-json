if (process.browser) {
  module.exports = require('./client.js');
} else {
  module.exports = require('./server.js');
}