const knex = require('knex');
const pg = require('pg');

const pool = new pg.Pool({
  user: 'root',
  password: 'root',
  host: 'localhost',
  port: 5432,
  database: 'postgres',
});

module.exports = pool;
