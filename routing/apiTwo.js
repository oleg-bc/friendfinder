const express = require("express");
var path = require("path");
const routerAPI = express.Router();

routerAPI.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});


routerAPI.get("/survey", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});
module.exports = routerAPI;
