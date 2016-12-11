const sendJsonResponse = require('../custom_modules/sendJsonResponse');

class accountCtrl {
    constructor() {}
    /**
     * Sign in user
     * @param {any} req
     * @param {any} res
     * 
     * @memberOf accountCtrl
     */
    signIn(req, res) {
        const user = req.body;

        if (user) {
            let email = user.email;
            let senha = user.senha;

            // TODO: Auth user
            // TODO: Generate token
            // TODO: Persiste the token
        }
    }
}