var express  = require("express"),
    app      = express(),
    http     = require("http"),
    server   = http.createServer(app),
    mongoose = require('mongoose'),
    methodOverride = require('method-override'),
    bodyParser = require('body-parser');

const uri_mongo = 'mongodb+srv://isi-read-only-user:OYKrQGLp5582EtSu@cluster0-fjo6d.mongodb.net/test'

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var port = process.env.PORT || 3000;
var router = express.Router();

router.get('/', function(req, res) {
   res.send("Funciona !");
});

router.get('/katka', function(req, res) {
   res.send("Ahoj Katka!");
});

router.get('/mila', function(req, res) {
   res.send("Hola doña Milagros");
});
app.use(router);

mongoose.connect(uri_mongo, function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  app.listen(port, function() {
    console.log("Node server running");
  });
});
