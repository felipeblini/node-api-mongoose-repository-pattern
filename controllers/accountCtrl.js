var sendJsonResponse = require('../custom_modules/sendJsonResponse');

var accountCtrl = {};

// Este endpoint irá receber um objeto com e-mail e senha.
// Caso o e-mail exista e a senha seja a mesma que a senha persistida, retornar igual ao endpoint de sign_up.
// Caso o e-mail não exista, retornar erro com status apropriado mais a mensagem "Usuário e/ou senha inválidos"
// Caso o e-mail exista mas a senha não bata, retornar o status apropriado 401 mais a mensagem "Usuário e/ou senha inválidos"

function signIn(req, res) {
    var user = req.body;

    if (user) {
        let email = user.email;
        let senha = user.senha;

        // TODO: Auth user
        // TODO: Generate token
        // TODO: Persiste the token
    }
}

accountCtrl.sigin = signIn;

// Expose the module
module.exports = function(app) {
    app.post('/signin', accountCtrl.sigin);
};