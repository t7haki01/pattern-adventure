var mysql = require('mysql');
var connection = mysql.createPool({
  host: 'host, typically localhost',
  user: 'user who is using db, typically root in case of admin',
  password: 'password',
  database: 'database where example database with table has been applied, i named with patternadventure'
});
module.exports = connection;
