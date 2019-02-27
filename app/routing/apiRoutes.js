var friendData = require("../data/friends");
var friendArray = []

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendData)
    });

    app.post("/api/friends", function (req, res) 
    {
        friendArray.push(friendData)
        friendArray.push(req.body)
        res.friendArray;
        var temp
        var currentFriendVariance = 0
        var tempfriendVariance = 0
        var matchName
        var matchPhoto
        for (var i = 0; i < friendArray.length; i++) 
        {
            console.log(friendArray[i].scores.length)
            for (j = 0; j < 10; i++) 
            {
                console.log(friendArray[i].scores[j])
                if (friendArray[i].scores[j] != req.body.scores[j]) 
                {
                    temp = friendArray[i].scores[j] - req.body.scores[j]
                    if (temp < 0) { temp = temp * (-1) }
                    tempfriendVariance = tempfriendVariance+temp
                }
                if (tempfriendVariance > currentFriendVariance) 
                {
                    matchName = req.body.name;
                    matchPhoto = req.body.photo;
                }
            }
            res.json({name: matchName,photo:matchPhoto});
            return;
        }

})
}
