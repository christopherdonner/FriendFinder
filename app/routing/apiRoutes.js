var friendData = require("../data/friends");
var friendArray = []

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendArray)
    });

    app.post("/api/friends", function (req, res) {
        friendArray.push(friendData)
        friendArray.push(req.body)
        res.friendArray;
        var match;
        var matchVariance = 0;
        var tempfriendVariance = 0;
        var currentFriendVariance=0;


        friendArray.forEach(arr => {
            arr.scores.forEach((score, i) => {
                if (score !== req.body.scores[i]) {
                    temp = score - req.body.scores[i];
                    if (temp < 0) {
                        temp = temp * -1;
                    }
                    tempfriendVariance += temp;
                }
                if (tempfriendVariance > currentFriendVariance) {
                    match=req.body
                    tempfriendVariance=currentFriendVariance
                    // matchName = req.body.name;
                    // matchPhoto = req.body.photo;
                }
            })
        });
        // friendArray.push(req.body);

        res.json(match);
    })

}
