var express = require('express');
var router = express.Router();
const data = require('../data/index.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log(data);
  res.locals.title=data.title;
  res.locals.data=data;
  res.render('index');
});

module.exports = router;
