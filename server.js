var express = require('express');
// instantiate the app
var app = express();

app.listen(process.env.PORT || 8080, function() {
  console.log('cool stuff on: 8080');
});

var bodyParser = require('body-parser');
app.use(bodyParser.json());

// set up a static file server that points to the "client" directory
// app.use(express.static(__dirname, '/client'));
app.use(express.static(__dirname + '/client'))

// mongoose
require('./server/config/mongoose.js');

// http routes
require('./server/config/routes.js')(app);

