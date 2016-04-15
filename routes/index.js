var express = require('express');
var router = express.Router();
var mongo = require('mongodb')
var db = require('monk')('localhost/nodeTorial')


/* GET home page. */
router.get('/', function(req, res, next) {

  var db = req.db   //db equals the database, req.db comes from app.js
  var entries = db.get('entries')
  entries.find({},{},function(err, entries){
    if (err) throw error
    res.render('index', {'entries': entries})
  })
});

module.exports = router;
