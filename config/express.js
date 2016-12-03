var express = require('express');
var app = express();

var consign = require('consign');
var bodyParser = require('body-parser');

consign().include('./controllers').into(app);

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

app.get(function(req, res) {
    res.json({ "mensagem": "endpoint not found" });
});

module.exports = function() {
    return app;
};