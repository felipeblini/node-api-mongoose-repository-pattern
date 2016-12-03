var app = require('./config/express.js')();

app.listen(3000, function() {
    console.log('servidor rodando na porta 3000');
});