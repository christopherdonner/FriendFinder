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
        friendArray.push(res)
        // res.json(friendArray);
            for(i=0;i<friendArray.length;i++){
                for(j=0;j<friendArray[i].score[j];i++){
                    
                }
            }
        res.json(true);
    })

}