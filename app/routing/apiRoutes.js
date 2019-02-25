var friendData=require("../data/friends.js");

module.exports=function(app){

    app.get("/api/friends", function(req, res){
        res.json(friendData)
    })

    app.post("api/friends", function(req, res){
        console.log("post")
        friendData.push(res)
        for(i=0;i<friendData.length;i++){
            var totalDifference
            for(j=0;j<10;j++){
                friendData.scores[i]
            }
        }
        
    })
}