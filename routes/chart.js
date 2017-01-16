var express = require('express');
var router = express.Router();

var {createOutput} = require('./readFile');

/* GET chart page. */
router.get('/sensor1', function(req, res, next) {
  createOutput(1);
  res.render('chart', {
    title: 'Chart 1'
  });
});

router.get('/sensor2', function(req, res, next) {
    createOutput(2);
    res.render('chart', {
        title: 'Chart 2'
    });
});

module.exports = router;
