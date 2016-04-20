var express = require('express');
var router = express.Router();
var mongo = require('mongodb')
var mongoose = require('mongoose')
//var db = require('monk')('localhost/nodeTorial')

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
router.get('/:id', function(req, res, next) {
  mongoose.model('blogs').find(function(err, blog){
    res.render('blogpage', {'blog': blog[0]})

  })
  // var entries = db.get('entries')
  // var id = req.params.id
  //
  // entries.findById(id, function(err, entry){


});

module.exports = router;
