 //jshint esversion:6

// fill in your code here...

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res){

  var radius = parseFloat(req.body.n1);
  var height = parseFloat(req.body.n2);

  var result = Math.PI * Math.pow(radius, 2) * (height/3)


  res.send("The volume is " + result.toFixed(2));

})


//this gets the response from the web page to this placeholder

app.listen(3000, function() {
  console.log ("Server is running on port 3000")
});