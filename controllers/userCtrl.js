var sendJsonResponse = require('../custom_modules/sendJsonResponse');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userRepository = require('../persistence/userRepository');

var userCtrl = {};

/**
 * List all users
 * $ curl http://localhost:3000/users
 * @param {object} req
 * @param {object} res
 */
function doListUsers(req, res) {
    console.log('rota /users encontrada');

    userRepo = new userRepository();

    let listaDeUsuarios = userRepo.listar();
    
    sendJsonResponse(res, 200, listaDeUsuarios);
}

userCtrl.list = doListUsers;

/**
 * Create a new user
 * $ curl http://localhost:3000/users/user -H "application/json" -d '{ "nome1": "string", "email": "string", "senha": "senha", "telefones": [ { "numero": "123456789", "ddd": "11" } ] }'
 * @param {object} req
 * @param {object} res
 */
function doCreateUser(req, res) {
    let userData = req.body;
    let returnStatus = 0;
    let returnContent = { message: '' };

    console.log('receiving request to create a new user:', userData);

    //TODO: validate model and persist user
    // O token deverá ser persistido junto com o usuário

    let UserSchema = new Schema({
        nome: { type: String, required: true },
        email: { type: String, required: true, index: { unique: true } },
        senha: { type: String, required: true },
        telefones: { type: [{}] },
        data_criacao: { type: Number },
        data_atualizacao: { type: Number },
        ultimo_login: { type: Number },
        token: { type: String }
    });

    let User = mongoose.model('User', UserSchema);

    // TODO: crypto password

    let now = new Date().getTime();

    let newUser = new User({
        nome: userData.nome,
        email: userData.email,
        senha: userData.senha,
        telefones: userData.telefones,
        data_criacao: now,
        data_atualizacao: now,
        ultimo_login: now,
        token: ""
    });

    newUser.save(function(err) {
        if(err) {
            console.log(err.message);

            returnStatus = 501;

            // Caso o e-mail já exista, deverá retornar erro com a mensagem "E-mail já existente".
            if (err.message.indexOf('E11000') > -1) {
                returnContent.message = 'E-mail já existente';
            } else {
                returnContent.message = 'Erro: Não foi possível fazer o registro. Por favor tente novamente';
            }

            console.log('erro ao tentar persistir o usuario:', err);
        } else {
            returnStatus = 201;
            returnContent.message = 'created new user: ' + newUser;
        }
    }); 

    sendJsonResponse(res, returnStatus, returnContent);
}

userCtrl.create = doCreateUser;

// Expose the module
module.exports = function(app) {
    app.get('/users', userCtrl.list);
    app.post('/users', userCtrl.create);
};