var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongo = require('mongodb')
var mongoose = require('mongoose');


var routes = require('./routes/index');
var blogpage = require('./routes/blogpage');
var about = require('./routes/about');
var links = require('./routes/links');

var app = express();
//Lets connect to our database using the DB server URL.
var uristring =
    process.env.MONGOLAB_URI ||
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

var blogsSchema = new mongoose.Schema({_id: String, title: String, author: String, body: String, date: String, videoLink: String, githubLink: String, difficulty: String});

var linksSchema = new mongoose.Schema({
	"_id" : String,
	"expressServerYT" : String,
	"expressServerGH" : String,
	"expressWebsiteYT" : String,
	"expressWebsiteGH" : String,
	"userLoginSystemYT" : String,
	"userLoginSystemGH" : String,
	"nodeBlogYT" : String,
	"nodeBlogGH" : String
})


var Links = mongoose.model('links',linksSchema)
var Blog = mongoose.model('blogs', blogsSchema)

// var blog1 = new Blog({_id: "5710c1dad6b28fa762bd17dd", title: "10 Node.js Projects: Express Setup", author: "Rawad", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat porttitor tincidunt. Mauris eget eros sollicitudin, ullamcorper arcu non, ornare neque. Integer sit amet commodo mauris, ut suscipit elit. Vestibulum arcu leo, malesuada porta blandit ut, condimentum et velit. Donec congue, mi in laoreet varius, odio ve", date: "April 12, 2016", videoLink: "https://www.youtube.com/embed/-SseYPQggYs?list=PLO-hrPk0zuI18xlF_480s6UiaGD7hBqJa", githubLink: "https://github.com/marley-nodejs/Learn-Nodejs-by-building-10-projects/tree/master/03_Basic_Express_Website/express-website", difficulty: 'Beginner'})
//
// //
// var blog2 = new Blog({_id: "5710df9bd6b28fa762bd17df", title: "10 Node.js Projects: Basic Express Website", author: "Rawad", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat porttitor tincidunt. Mauris eget eros sollicitudin, ullamcorper arcu non, ornare neque. Integer sit amet commodo mauris, ut suscipit elit. Vestibulum arcu leo, malesuada porta blandit ut, condimentum et velit. Donec congue, mi in laoreet varius, odio ve", date: "April 13, 2016", videoLink: "https://www.youtube.com/embed/pk3--qhXwLc?list=PLO-hrPk0zuI18xlF_480s6UiaGD7hBqJa", githubLink: "https://github.com/marley-nodejs/Learn-Nodejs-by-building-10-projects/tree/master/03_Basic_Express_Website/express-website", difficulty: 'Intermediate'})
//
//
// blog1.save(function (err, blogObj) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('saved successfully:', blogObj);
//   }
// });
//
// blog2.save(function (err, blogObj) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('saved successfully:', blogObj);
//   }
// });


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//very important to make db accessible to rest of files, must be placed above app.use('/', routes)


app.use('/', routes);
app.use('/blogpage', blogpage);
app.use('/about', about)
app.use('/links', links)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.locals.truncateText = function(text, length){
  var truncatedText = text.substring(0, length)
  return truncatedText
}

app.get('/',function(req,res){
  db.driver.admin.listDatabases(function(e,dbs){
      res.json(dbs);
  });
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
