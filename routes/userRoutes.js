const userCtrl = require('../controllers/userCtrl');

const ctrl = new userCtrl();

console.log(ctrl);

console.log(ctrl.repo);

module.exports = function(app) {
    app.get('/users', ctrl.doListUsers);
    app.post('/users/create', ctrl.doCreateUser);
    app.get('/users/:id', ctrl.doListUsersById)
};