//Dependencies - path package to get the right file for the HTML
var path = require("path");

// save app data inside of `app/data/friends.js` as an array of objects.
var appData = require("../data/friends.js");

//Routes
// A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.

module.exports = function(app) {
  // A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
  app.get("/api/friends", function(req, res) {
    res.json(friends)
  });

  // A POST routes `/api/friends`. This will be used to handle incoming survey results.
  app.post("/api/friends", function(req, res) {
    // This route will also be used to handle the compatibility logic.
  });

};