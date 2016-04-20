var express = require('express');
var router = express.Router();
var mongo = require('mongodb')
var mongoose = require('mongoose')
//var db = require('monk')('localhost/nodeTorial')


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
