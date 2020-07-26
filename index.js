const cron = require("node-cron");
var request = require('request');

cron.schedule("14 02 * * *", function () {
    var options = {
        uri: 'https://api.codemagic.io/builds',
        method: 'POST',
        headers: {
            "content-type": "application/json",
            "x-auth-token": "lYlrJXU30JwG2XnKndrErWCQm52ru5Jqqq-eLX3ZY30",
        },
        json: {
            "appId": "5ec40ee743c9300018c2bf44",
            "workflowId": "5f1b6dc787de4d3dc14e4bfc",
            "branch": "master"
        }
    };
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log("Build started")
        }
    });
})