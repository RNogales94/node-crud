var http = require("http");
var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://isi-read-only-user:OYKrQGLp5582EtSu@cluster0-fjo6d.mongodb.net/test";

var bd_output;

MongoClient.connect(uri, function(err, client) {
   const collection = client.db("test").collection("devices");
   // perform actions on the collection object
   console.log(collection);
   bd_output = collection;
   client.close();
});

var port = process.env.PORT || 3000;

http.createServer(function (request, response) {

   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   // Send the response body as "Hello World"
   response.end(bd_output);
}).listen(port);

// Console will print the message
console.log('Server running at port ' + port);
