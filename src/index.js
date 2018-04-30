var http = require("http");
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(uri, function(err, client) {
   const collection = client.db("test").collection("devices");
   // perform actions on the collection object
   console.log(collection)
   client.close();
});

var port = process.env.PORT || 3000;

http.createServer(function (request, response) {

   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   // Send the response body as "Hello World"
   response.end(collection);
}).listen(port);

// Console will print the message
console.log('Server running at port ' + port);
