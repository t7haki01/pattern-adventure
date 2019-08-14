var express = require('express');
var router = express.Router();
var accounts = require('../models/account');

router.get('/getid/:account?', function(req, res, next) {
  accounts.getIdByAccount(req.params.account, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.get('/:account_id?', function(req, res, next) {
  if (req.params.account_id) {
    accounts.getAccountById(req.params.account_id, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    accounts.getAllAccounts(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});
router.post('/', function(req, res, next) {
  accounts.addAccount(req.body, function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body); //or return count for 1 & 0
    }
  });
});

router.delete('/:account_id', function(req, res, next) {
  accounts.deleteAccount(req.params.account_id, function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});

router.put('/:account_id', function(req, res, next) {
  accounts.updateAccount(req.params.account_id, req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
