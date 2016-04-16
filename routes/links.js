var express = require('express');
var router = express.Router();
var mongo = require('mongodb')
var db = require('monk')('localhost/nodeTorial')

router.get('/', function(req,res,next){
  var db = req.db
  var links = db.get('links')

  links.find({},{},function(err, links){
    if err throw error
    res.render('links', {
      'links': links
    })
  })
})
