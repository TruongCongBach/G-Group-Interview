const { database } = require('./index');

const knex     = require('knex')({ ...database });
module.exports = { knex };
