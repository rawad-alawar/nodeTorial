var express = require('express');
var router = express.Router();
var mongo = require('mongodb')
var mongoose = require('mongoose')
// var db = require('monk')('localhost/nodeTorial')

router.get('/', function(req,res,next){

  mongoose.model('links').find(function(err, link){
    res.render('links', {'links': link, 'nav': 'links'})
    

  })
  // var db = req.db
  // var links = db.get('links')
  //
  // links.find({},{},function(err, links){
  //   if (err) throw error
  //   res.render('links', {'links': links,'nav':'links'})
  // })
})

module.exports = router;
