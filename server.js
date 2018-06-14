//Dependencies = npm packages that give the server functionality
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//creat the express server
var app = express();
//initial PORT = listener & let the port be set by Heroku
var PORT = process.env.PORT || 3000;

//data parsing in express app
app.use(bodyParser.urlencoded({
  extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

//Route files - the guide on how to respond when users visit or request date from various URLS.
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


//Get the server listening - starter
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});