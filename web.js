var express = require('express');

var app = express.createServer(express.logger());

var fs = require("fs");
var thestr =  new Buffer(25);


thestr = fs.readFileSync('index.html',thestr);

app.get('/', function(request, response) {
  response.send(thestr);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
