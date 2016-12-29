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
    { name: 'Holly', email: 'holly@test.com', avatar: 'http://loremflickr.com/350/350'},
    { name: 'Dave', email: 'Dave@test.com', avatar: 'http://place-hoff.com/300/300'},
    { name: 'Steven', email: 'steve@test.com', avatar: 'http://stevensegallery.com/900/900'},

    { name: 'Bob', email: 'bob@test.com', avatar: 'http://placebeard.it/400/400'},
    { name: 'Nick', email: 'nick@test.com', avatar: 'http://placecage.com/400/400'}
  ];


    res.render('pages/about', {users: users});
});


// route contact page

router.get('/contact', function(req, res){
    res.render('pages/contact');
});

router.post('/contact', function(req, res){

  console.log(req.body.message);
  res.send('Thanks for contacting us,' + req.body.name +' we will respond shortly');

});


module.exports = router;
