var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});



app.listen(8000, function (err) {
    if (!err){
        console.log("Listening on 8000");
    } else {
        console.log("ERROR: " + err);
    }
})