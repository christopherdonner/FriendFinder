var friendData=require("../data/friends");
var friendArray=[]

module.exports=function(app){

    app.get("/api/friends", function(req, res){
        res.json(friendData)
    });

    app.post("/api/friends", function(req, res){
        console.log("post")
        // console.log(res)
        friendArray.push(friendData)
        friendArray.push(req.body)
        console.log(friendArray)
        console.log(friendArray[0].scores[0])
        res.friendArray;
        var temp
        var friendVariance=[]
        for(i=0;i<friendArray.length;i++){
                for(j=0;j<friendArray[i].scores[j];i++){
                    if(friendArray[i].scores[j]!=req.body.scores[j]){
                        temp=friendArray[i].scores[j]-req.body.scores[j]
                        if(temp<0){temp=temp*(-1)}
                        friendVariance[i]+=temp    
                    }
                }
            }
        res.json(true);
        return;

    })

}