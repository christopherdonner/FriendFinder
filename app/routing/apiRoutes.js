var friendData = require("../data/friends");
var friendArray = []

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendData)
    });

    app.post("/api/friends", function (req, res) 
    
    {
        friendArray.push(friendData)
        // friendArray.push(req.body)
        res.friendArray;
        var match;
        var matchVariance = 0;

        for(i=0; i<friendArray.length;i++){
            var temp = 0;

            for(j=0;j<friendArray[i].scores.length;j++){
                temp +=(friendArray[i].scores[j] - req.body.scores[j]);
            }
            if(temp < matchVariance){
                matchVariance = temp;
                match = friendArray[i]
                console.log(match)
            }
        }
        friendArray.push(req.body);

        res.json(match);
    })

    }
