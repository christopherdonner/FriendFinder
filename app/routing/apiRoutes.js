var friendData = require("../data/friends");
var friendArray = []

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendData)
    });

    app.post("/api/friends", function (req, res)  // this is the post
    {
        friendArray.push(friendData)        // this is the call back that is failing, causing the HTTP 500 response
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
                console.log(friendArray[i].scores[j])   // this console log appears to come back as an integer value
                if (friendArray[i].scores[j] != req.body.scores[j]) // however, this returns undefined, causing the crash
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
