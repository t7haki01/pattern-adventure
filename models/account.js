var db = require('../config/db.js');
const bcrypt = require('bcryptjs');
const saltRounds = 10;
var today = new Date();

var account = {
  getAllAccounts: function(callback) {
    return db.query('select * from account', callback);
  },
  getAccountById: function(account_id, callback) {
    return db.query('select * from account where id=?', [account_id], callback);
  },
  getIdByEmail: function(email, callback) {
    return db.query(
      'select id from account where email=?',
      [email],
      callback
    );
  },
  addAccount: function(accounts, callback) {
    return bcrypt.hash(accounts.password, saltRounds, function(err, hash) {
      db.query(
        'insert into account (email, password, firstname, lastname, registered_date, last_modified_date, isAdmin) values(?,?,?,?,?,?,?)',
        [accounts.email, hash, accounts.firstname, accounts.lastname, today, today, accounts.isAdmin],
        callback
      );
    });
  },
  deleteAccount: function(account_id, callback) {
    return db.query('delete from account where id=?', [account_id], callback);
  },
  updateAccount: function(account_id, accounts, callback) {
      return bcrypt.hash(accounts.password, saltRounds, function(err, hash) {
          return db.query(
              'update account set email=?, password=?, firstname=?, lastname=?, last_modified_date=?, isAdmin=? where id=?',
              [
                  accounts.email,
                  hash,
                  accounts.firstname,
                  accounts.lastname,
                  today,
                  accounts.isAdmin,
                  account_id
              ],
              callback
          );
      });
  },
};
module.exports = account;
