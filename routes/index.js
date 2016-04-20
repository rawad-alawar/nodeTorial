var express = require('express');
var router = express.Router();
var mongo = require('mongodb')
var mongoose = require('mongoose')
// var db = require('monk')('localhost/nodeTorial')

var uristring =
    process.env.MONGODB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/nodeTorialxxx';

//mongoose.connect('mongodb://localhost/nodeTorialxxx');
mongoose.connect(uristring, function (err, res) {
      if (err) {
      console.log ('ERROR connecting to: ' + uristring + '. ' + err);
      } else {
      console.log ('Succeeded connected to: ' + uristring);
      }
    });
/* GET home page. */
router.get('/home', function(req,res,next){
  res.redirect("/")

})
router.get('/', function(req, res, next) {
  mongoose.model('blogs').find(function(err, blog){
    res.render('index', {'entries': blog, 'nav': 'home'})


  })
  // var db = req.db   //db equals the database, req.db comes from app.js
  // var entries = db.get('entries')
  //
  // entries.find({},{},function(err, entries){
  //   if (err) throw err
  //   res.render('index', {'entries': entries, 'nav':'home'})
  // })
});

module.exports = router;
