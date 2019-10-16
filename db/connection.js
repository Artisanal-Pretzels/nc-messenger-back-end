const ENV = process.env.NODE_ENV || "test";
const knex = require("knex");

const dbConfig = require("../knexfile");

module.exports = knex(dbConfig);
