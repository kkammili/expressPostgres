const Pool = require("pg").Pool;
// const secrets = require("../secrets/db_configuration");

const secrets = {
  user: "monsteruser",
  password: "monsterpass",
  host: "db",
  database: "monsterdb",
  port: 5432,
};

//    DB_USER: monsteruser
//       DB_HOST: db
//       DB_DATABASE: monsterdb
//       DB_PASSWORD: monsterpass

const pool = new Pool(secrets);
module.exports = pool;
