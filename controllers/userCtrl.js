const sendJsonResponse = require('../custom_modules/sendJsonResponse');
const crypto = require('../custom_modules/crypto-string');
const User = require('../models/user');
const userRepository = require('../repository/UserRepository');

class userController {

    /**
     * Creates an instance of userController.
     * 
     * 
     * @memberOf userController
     */
    constructor() { }

    /**
     * List all users
     * $ curl http://localhost:3000/users
     * @param {object} req
     * @param {object} res
     * @returns {User[]}
     */
    doListUsers(req, res) {

        const repo = new userRepository();
        
        repo.allUsers().then(users =>
            sendJsonResponse(res, 200, users));
    }    

    /**
     * List all users
     * $ curl http://localhost:3000/users/:id
     * @param {object} req
     * @param {object} res
     * @param {int} req.params.id - The user id
     * @returns {User[]}
     */
    doListUsersById(req, res) {

        const repo = new userRepository();

        repo.allUsersWithId(req.params.id, (err, user) =>
            sendJsonResponse(res, 200, user));
    }

    /**
     * Create a new user
     * $ curl http://localhost:3000/users -X POST -v -H "Content-type: application/json" -d '{ "nome": "string-nome", "email": "string-email", "senha": "string-senha", "profile": "User", "telefones": [ { "numero": "123456789", "ddd": "11" } ] }'
     * @param {string} req.body.nome
     * @param {string} req.body.email
     * @param {string} req.body.senha
     * @param {Object[]} req.body.telefones
     * @param {object} res
     * @returns {User}
     */
    doCreateUser(req, res, next) {
        const userData = req.body;
        const now = new Date().getTime();

        // create and validate model
        const user = new User({
            nome: userData.nome,
            email: userData.email,
            senha: crypto(userData.senha),
            telefones: userData.telefones,
            data_criacao: now,
            data_atualizacao: now,
            ultimo_login: now,
            profile: userData.profile,
            token: ""
        });

        const repo = new userRepository();

        // save user in the repository
        repo.save(user, mayHaveError => {
            var _returnStatusCode = 501;
            var _returnContent = { message: '' };

            if(!mayHaveError) {
                console.log('saved without errors');
                _returnStatusCode = 200;
                _returnContent = user;
            } else {
                if (mayHaveError.message.indexOf('E11000') > -1) {
                    _returnContent.message = 'E-mail já existente';
                } else {
                    _returnContent.message = String(mayHaveError);
                }

                console.log('erro ao tentar persistir o usuario.', 'Error: ' + mayHaveError);
            }

            sendJsonResponse(res, _returnStatusCode, _returnContent);
        });
    }
}

module.exports = userController;