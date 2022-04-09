const db = require('./db');

db.getConnection((err, conn) => {
  conn.query('SELECT something from sometable', (error, results, fields) => {
    conn.release();
  });
});

module.exports = class Model {
    constructor(...args) {
      super(...args);
    }
    find(id) {

    }

    delete() {

    }

    save() {

    }
}
