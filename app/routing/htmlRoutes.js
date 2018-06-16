//path package to get the correct file path for the HTML
var path = require("path");

// GET Route to `/survey` which should display the survey page.
module.exports = function(app) {
  //basic route that send the user to the homepage
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"));
  });

  //route to display survey.html
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/survey.html"));
  });

  //A default, catch-all route that leads to `home.html` which displays the home page.
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"))
  });
};