// save app data inside of `app/data/friends.js` as an array of objects.
var friends = require("../data/friends.js");

//Routes
// A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.

module.exports = function(app) {
  // A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
  app.get("/api/friends", function(req, res) {
    res.json(friends);
    // console.log(req);
  });

  // A POST routes `/api/friends`. This will be used to handle incoming survey results.
  app.post("/api/friends", function(req, res) {
    // This route will also be used to handle the compatibility logic.
    var theMatch = {
      name: "",
      photo:"",
      matchDif: 1000
    };

    // Take the survey results POST and parse it
    var userData = req.body;
    // console.log('userData= '+ JSON.stringify(userData));

    var userScores = userData.scores;
    // console.log(userScores);

    var totalDifference = 0;

    //loop through the friends data array of objects to get each friends scores
    for (var i = 0; i < friends.length; i++) {
      console.log(friends[i].name);
      totalDifference = 0;

      //loop through friend's the user's score and calculate the absolute difference between the two and push the total difference variable set above
      for (var j = 0; j < friends[i].scores[j]; j++) {
        //calculate the diff between the userScore and friendScore
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

        if(totalDifference <= theMatch.matchDif)   {

          // Reset theMatch to be the new friend
          theMatch.name = friends[i].name;
          theMatch.photo = friends[i].photo;
          theMatch.matchDif = friends[i].score
        }
      }
    }
    // Put new friend from survey in "database" array
    //db will always return that the user's bf.
    friends.push(userData);
    //Return the best matched friend
    res.json(theMatch);
  });
};