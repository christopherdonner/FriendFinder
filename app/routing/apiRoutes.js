var friendData=require("../data/friends.js");

module.exports=function(app){

    app.get("/api/friends", function(req, res){
        res.json(friendData)
    })

    app.post("api/friends", function(req, res){
        console.log("post")
        friendData.push(res)
        for(i=0;i<friendData.length;i++){

        }
        $("#match-name").text(data.name);
          $("#match-img").attr("src", data.photo);

          // Show the modal with the best match
          $("#results-modal").modal("toggle");

        });
      } 