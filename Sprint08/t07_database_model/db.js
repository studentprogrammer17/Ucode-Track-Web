const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'example.org',
  user            : 'Dima',
  password        : 'secret',
  database        : 'db'
});

module.export = {
  getConnection: (callback) => {
    return pool.getConnection(callback);
  } 
}

