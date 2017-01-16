var express = require('express');
var router = express.Router();

debugger;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Scoring Auto Driver' });
});

module.exports = router;
