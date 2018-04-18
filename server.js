//
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://192.168.6.96:27017');

console.log(mongoose.connection.readyState);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoute'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port)

// var express = require('express')
// var app = express();
// var mongo = require('mongodb');
//
// app.listen(3000);
//
// app.get("/hihi", function(req, res){
//     res.send("<font color=red>Ambition </font")
// });
