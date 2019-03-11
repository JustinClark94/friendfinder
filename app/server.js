//NPM packages required from instructions
var express = require ("express");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3333;

//Sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("../app/routing/apiroutes.js")(app);
require("../app/routing/htmlroutes.js")(app);


//Starts server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});