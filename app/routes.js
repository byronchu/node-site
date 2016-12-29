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

  var users = [
    { name: 'Holly', email: 'holly@test.com', avatar: 'http://placebear.com/350/350'},
    { name: 'Chris', email: 'chris@test.com', avatar: 'http://placebear.com/300/300'},
    { name: 'Pat', email: 'nick@test.com', avatar: 'http://placebear.com/900/900'},
    { name: 'George', email: 'george@test.com', avatar: 'http://placebear.com/400/400'}
  ];


    res.render('pages/about', {users: users});
});


// route contact page

router.get('/contact', function(req, res){
    res.render('pages/contact');
});

router.post('/contact', function(req, res){

});


module.exports = router;
