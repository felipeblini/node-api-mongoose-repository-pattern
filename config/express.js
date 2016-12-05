var express = require('express');
var app = express();

var consign = require('consign');
var bodyParser = require('body-parser');

var sendJsonResponse = require('../custom_modules/sendJsonResponse.js');

app.use(bodyParser.json());

consign().include('./controllers').into(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    console.log('No corresponding route found');
    var err = new Error('Resource Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        let status = err.status || 500;
        let message = err.message;

        sendJsonResponse(res, status, message);
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    let status = err.status || 500;
    let message = err.message;

    if(status !== 404) {
        message = 'error';
    }

    sendJsonResponse(res, status, message);
});

module.exports = function() {
    return app;
};