var express = require('express');
var path = require('path')
var router = express.Router();

// route home page

router.get('/', function(req,res) {
  res.send('hello world');
})

// route about  page

router.get('/about', function(req,res) {
  res.send('the about page');
})


// route contact page

router.get('/contact');

router.post('/contact');


module.exports = router;
