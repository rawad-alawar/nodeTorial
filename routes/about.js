var express = require('express');
var router = express.Router();

var about = {body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat porttitor tincidunt. Mauris eget eros sollicitudin, ullamcorper arcu non, ornare neque. Integer sit amet commodo mauris, ut suscipit elit. Vestibulum arcu leo, malesuada porta blandit ut, condimentum et velit. Donec congue, mi in laoreet varius, odio velit sagittis justo, et lobortis dolor lectus sit amet metus. Sed lacinia, nunc ut mollis dapibus, orci nibh dignissim sem, quis molestie ligula ante sed massa. Aliquam tortor orci, tincidunt quis sollicitudin dignissim, aliquam vitae elit.'}

router.get('/', function(req, res, next) {
  res.render('about',{'about': about} );
});

module.exports = router;
