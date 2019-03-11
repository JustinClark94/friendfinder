var express = require ("express");
var path = require("path");

module.exports = function (app) {
   //from 13.2 class. review to understand
   // Basic route that sends the user first to the AJAX Page
    app.get("/", function(req, res) {

        var home = path.join(__dirname, "../public/home.html");
        res.sendFile(home);
    });

    app.get("/survey", function(req, res) {
        var survey = path.join(__dirname, "../public/survey.html");
        res.sendFile(survey);
    });  
}