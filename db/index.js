const Pool = require('pg').Pool;
const secrets = require('../secrets/db_configuration')

// const secrets = {
//     user: 'node_user',
//     password:'node_password',
//     host:'localhost',
//     database:'monstersdb',
//     port:5432
// }

const pool = new Pool(secrets);
module.exports = pool
