const express = require('./config/express.js');
const dbConfig = require('./config/db');
const mongoose = require('mongoose');

// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign

// plugin bluebird promise in mongoose
mongoose.Promise = Promise;

const port = process.env.PORT || 3000;

const app = express();

mongoose.connect(dbConfig.db);

const db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

app.listen(port, function() {
    console.log('servidor rodando na porta 3000');
});