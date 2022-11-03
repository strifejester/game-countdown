var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(
    'index', 
    { title: 'This is an express page' countDown: 'Making a countdown'});
});

module.exports = router;
