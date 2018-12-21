
var friends = require("../app/friends");
module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });
    app.post("/api/friends", function (req, res) {

//     console.log("friends is ");
//     var x = JSON.stringify(friends, null, 4);
//     console.log(x);
//     console.log("hello");
//     console.log("length of freiends array is:  " + friends.length);
//     console.log("and req.body.scores is");
//     console.log(req.body.scores);
// ///debuggging end
    var theScore = function (arrArg) {
      var ys = 0;
      var arrLen = arrArg.length;
      for (var i = 0; i < arrLen; i++) {
        ys += parseInt(arrArg[i]);
      }
      return ys;
    };
    console.log("your score is");
    var x = theScore(req.body.scores)
    console.log(x);
    var scores = [];
    var match;
    for (var key in friends) {
      if (friends.hasOwnProperty(key))
        //console.log(key+"->"+friends[key]);
        //console.log(friends[key].scores)

        var score = theScore(friends[key].scores);
      console.log(friends[key].name + "'s score is " + score);
      scores.push(score);
      var absoluteDiff=Math.abs(x-score);
      
      
      if (absoluteDiff==0){
        match = friends[key];
      }else{
        for(var i=0;i<scores.length;i++){
          var lowest = scores[0];
          if (absoluteDiff<scores[i]){
            lowest = scores[i];
            var keyIndex=i;
          }
        }
        match=friends[keyIndex];
      }
    }
     
    res.send(match);
     });
};
  