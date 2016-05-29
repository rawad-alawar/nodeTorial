//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/my_database_name';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);

    // Get the documents collection
   var collection = db.collection('blogPosts');

   var blog1 = {
	"_id" : ObjectId("5710c1dad6b28fa762bd17dd"),
	"title" : "10 Node.js Projects: Express Setup",
	"author" : "Rawad",
	"body" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat porttitor tincidunt. Mauris eget eros sollicitudin, ullamcorper arcu non, ornare neque. Integer sit amet commodo mauris, ut suscipit elit. Vestibulum arcu leo, malesuada porta blandit ut, condimentum et velit. Donec congue, mi in laoreet varius, odio ve",
	"date" : "April 12, 2016",
	"videoLink" : "https://www.youtube.com/embed/-SseYPQggYs?list=PLO-hrPk0zuI18xlF_480s6UiaGD7hBqJa",
	"githubLink" : "https://github.com/marley-nodejs/Learn-Nodejs-by-building-10-projects/tree/master/03_Basic_Express_Website/express-website"
}

  var blog2 = {
	"_id" : ObjectId("5710df9bd6b28fa762bd17df"),
	"title" : "10 Node.js Projects: Basic Express Website",
	"author" : "Rawad",
	"body" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat porttitor tincidunt. Mauris eget eros sollicitudin, ullamcorper arcu non, ornare neque. Integer sit amet commodo mauris, ut suscipit elit. Vestibulum arcu leo, malesuada porta blandit ut, condimentum et velit. Donec congue, mi in laoreet varius, odio ve",
	"date" : "April 13, 2016",
	"videoLink" : "https://www.youtube.com/embed/pk3--qhXwLc?list=PLO-hrPk0zuI18xlF_480s6UiaGD7hBqJa",
	"githubLink" : "https://github.com/marley-nodejs/Learn-Nodejs-by-building-10-projects/tree/master/03_Basic_Express_Website/express-website"
}

  collection.insert([blog1, blog2], funciton(err, result){
    if (err){
      console.log(err)
    } else {
      consol.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result)
    }
  })

    //Close connection
    db.close();
  }
});
