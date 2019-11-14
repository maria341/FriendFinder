const friendsArr = require("../data/friends.js");

function apiRoutes(app) {

    app.get("/api/friends", function(request, response) {
        response.json(friendsArr);
    });

    app.post("/api/friends", function(request, response) {

        const newFriend = {
            name: request.body.name,
            photo: request.body.photo,
            scores: []
        };

        const scoresArray = [];
        for(let i=0; i<request.body.scores.length; i++) {
            scoresArray.push( parseInt(request.body.scores[i]) )
        }

        newFriend.scores = scoresArray;

        const scoreCompareArr = [];
        for(let i=0; i<friendsArr.length; i++) {
            
            const currentCompareArr = 0;
            for (let j=0; j<newFriend.scores.length; j++) {
                currentCompareArr += Math.abs( newFriend.scores[j] - friendsArr[i].scores[j] );
            }

            scoreCompareArr.push(currentCompareArr);
        }

        const bestMatch = 0;
        for(let i=1; i<scoreCompareArr.length; i++) {
            if(scoreCompareArr[i] <= scoreCompareArr[bestMatch]) {
                bestMatch = i;
            }
        }

        const bestFriendMatch = friendsArr[bestMatch];

        response.json(bestFriendMatch);

        friendsArr.push(newFriend);
    });

}

module.exports = apiRoutes;
