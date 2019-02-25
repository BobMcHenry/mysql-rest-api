var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/all', function(req, res, next) {
  db.query("select * from film", (error, result, fields) => {
    if (error) {
      res.status(500).send(error);
    }
    res.send(result);
  });
});

router.get('/simple', function(req, res, next) {
  db.query("select film_id, title from film", (error, result, fields) => {
    if (error) {
      res.status(500).send(error);
    }
    res.send(result);
  });
});

router.get('/rating/:rating', function(req, res, next) {
  var sqlQuery = "select * from film where rating=?";
  db.query(sqlQuery, [req.params.rating], (error, result, fields) => {
    if (error) {
      res.status(500).send(error);
    }
    res.send(result);
  });
});

router.get('/:id', function(req, res, next) {
  var sqlQuery = "select * from film where film_id=?";
  db.query(sqlQuery, [req.params.id], (error, result, fields) => {
    if (error) {
      res.status(500).send(error);
    }
    console.log(sqlQuery);
    res.send(result);
  });
});

module.exports = router;
