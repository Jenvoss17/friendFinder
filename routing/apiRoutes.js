const fs = require('fs');
const friendData = require('../app/data/friends.js');

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.status(200);
        res.send(friendData)
    })

    app.post('/api/friends', function (req, res) {
        // console.log(req)
        var data = req.body;
        var closestFriend = {};
        var bestScore = 5555;
        var currScore = 0;

        friendData.forEach(function (friend) {
            currScore = 0;
            friend.scores.forEach(function (score, index) {
                currScore += Math.abs(score - data.scores[index]);
            })
            if (currScore < bestScore) {
                bestScore = currScore;
                closestFriend = friend;
            }
        });



        friendData.push(data);
        fs.writeFileSync('./app/data/friends.js', 'module.exports = ' + JSON.stringify(friendData) + ';', function (err) {
            if (err) {
                throw err;
            }
        });



        res.status(200);
        res.send(closestFriend);
    })
}