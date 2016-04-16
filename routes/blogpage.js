var express = require('express');
var router = express.Router();
var mongo = require('mongodb')
var db = require('monk')('localhost/nodeTorial')


router.get('/:id', function(req, res, next) {
  var entries = db.get('entries')
  var id = req.params.id

  entries.findById(id, function(err, entry){
    res.render('blogpage', {'entries': entry})
  })
});

module.exports = router;
