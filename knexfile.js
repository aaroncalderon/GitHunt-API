// Since Knex always runs this file first, all of our seeds and migrations are babelified.
require('babel-register');

// load config stuff.
// I may be doing this the wrong way, if anyone cares to review
// the syntax for `./config/config.js`, thanks in advance.
var _cfg = require('./config/config').default

// module.exports = {
//   development: {
//     client: 'sqlite3',
//     connection: {
//       filename: './dev.sqlite3',
//     },
//     useNullAsDefault: true,
//   },
// };

module.exports = {
  development: {
    client: _cfg.dialect,
    connection: {
      host : _cfg.host,
      user : _cfg.user,
      password : _cfg.pass,
      database : _cfg.db,
    },
    useNullAsDefault: true,
  },
};
