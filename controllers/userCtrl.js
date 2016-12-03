var sendJsonResponse = require('../custom_modules/sendJsonResponse.js');

var userCtrl = {};

/**
 * List all users
 * $ curl http://localhost:3000/users
 * @param {any} req
 * @param {any} res
 */
function doListUsers(req, res) {
    console.log('rota /users encontrada');
    
    let listaDeUsuarios = [{ "nome1": "string", "email": "string", "senha": "senha", "telefones": [ { "numero": "123456789", "ddd": "11" } ] },
        { "nome": "string", "email": "string", "senha": "senha", "telefones": [ { "numero": "123456789", "ddd": "11" } ] }];

    sendJsonResponse(res, 200, listaDeUsuarios);
}

userCtrl.list = doListUsers;

/**
 * Create a new user
 * $ curl http://localhost:3000/users/user -H "application/json" -d '{ "nome1": "string", "email": "string", "senha": "senha", "telefones": [ { "numero": "123456789", "ddd": "11" } ] }'
 * @param {any} req
 * @param {any} res
 */
function doCreateUser(req, res) {
    let newUser = req.boby;

    console.log('receiving request to create a new user: ' + newUser);

    //TODO: validate model and persist user

    sendJsonResponse(res, 201, {message: 'created new user: ' + newUser });
}

userCtrl.create = doCreateUser;


// Expose the module
module.exports = function(app) {
    app.get('/users', userCtrl.list);
    app.post('/users/user', userCtrl.create);
};