var express = require('express');
var router = express.Router();
var mongo = require('mongodb')
var db = require('monk')('localhost/nodeTorial')


/* GET home page. */
router.get('/home', function(req,res,next){
  res.redirect("/")
})
router.get('/', function(req, res, next) {

  var db = req.db   //db equals the database, req.db comes from app.js
  var entries = db.get('entries')

  entries.find({},{},function(err, entries){
    if (err) throw err
    res.render('index', {'entries': entries, 'nav':'home'})
  })
});

module.exports = router;
