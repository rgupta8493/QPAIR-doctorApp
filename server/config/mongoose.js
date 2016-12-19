// set up to connect to MongoDB 
// connect to models
var mongoose = require('mongoose');
// require file-system so that we can load, read, require all of the model files
var fs = require('fs');
// connect to the database
if (process.env.DEV_ENV) {
  //connect to mongodb local server
  mongoose.connect("mongodb://localhost/docAppTodo"); //allows us to perform CRUD operations locally
}
else {
  mongoose.connect("mongodb://ronak:ronak@ds139448.mlab.com:39448/docapptodo"); //on mongolab server
}
// specify the path to all of the models
var models_path = __dirname + '/../models';
// read all of the files in the models_path and for each one check if it is a javascript file before requiring it
fs.readdirSync(models_path).forEach(function (file) {
  if (file.indexOf('.js') > 0) {
    require(models_path + '/' + file);
  }
})