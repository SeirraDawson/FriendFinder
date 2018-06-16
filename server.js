//Dependencies = npm packages that give the server functionality
var express = require("express");
var bodyParser = require("body-parser");

//creat the express server
var app = express();
//initial PORT = listener & let the port be set by Heroku
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: true}));
//parse custom JSON types as JSON
app.use(bodyParser.json());
//parson HTML body into string
app.use(bodyParser.text({type: "text/html"}));

//Route files - the guide on how to respond when users visit or request date from various URLS.
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//Get the server listening - starter
app.listen(PORT, function() {
  console.log("Listening on PORT: " + PORT);
});