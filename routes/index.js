var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/backend', function(req, res) {
  res.sendfile('public/backend.html');
});

router.get('/login', function(req, res) {
  res.sendfile('public/login.html');
});

router.get('/survey_create', function(req, res) {
  res.sendfile('public/survey_create.html');
});

router.post('survey_submit', function(req, res) {
  res.sendfile('public/login.html');
});

module.exports = router;
