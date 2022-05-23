// jsinit esversion:6
const express = require("express");
const app = express();

app.get("/", function(req, res){
  res.send("<h1>Hello Bruh</h1>");
});

app.get("/contact", function(req, res){
  res.send("Contact me at louisatellite@gmail.com");
});

app.get("/about", function(req, res){
  res.send("My name is Louis and I love sushi and code.")
});

app.listen(3000, function(){
  console.log("Server started on port 3000")
});
