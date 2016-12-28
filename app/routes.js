var express = require('express');
var path = require('path')
var router = express.Router();

// route home page

router.get('/', function(req,res) {
  //res.send('hello world');
  res.render('pages/index');
})

// route about  page

router.get('/about', function(req,res) {
    res.render('pages/about');
})


// route contact page

router.get('/contact', function(req, res){
    res.render('pages/contact');
});

router.post('/contact', function(req, res){
    
});


module.exports = router;
