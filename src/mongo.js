var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://isi-read-only-user:OYKrQGLp5582EtSu@cluster0-fjo6d.mongodb.net/test";
MongoClient.connect(uri, function(err, client) {
   const collection = client.db("test").collection("devices");
   // perform actions on the collection object
   console.log(collection)
   client.close();
});
