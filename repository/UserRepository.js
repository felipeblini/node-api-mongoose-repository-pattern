const mongoose = require('mongoose');

class UserRepository {
    constructor () { }

     save(user, cb) {
        console.log('saving user in the repository" ' + user);

        user.save(function(mayHaveError) {
            cb(mayHaveError);
        });
     }

     allUsers() {
         return mongoose.model('User')
           .find()
           .exec();
     }

     allUsersWithId(id, cb) {
         console.log('finding user by id: ' + id);

        //  return mongoose.model('User')
        //    .findById(id)
        //    .exec()
        //    .then((err, user) => console.log(user));

        mongoose.model('User').findById(id, cb);

         //return mongoose.model('User').find(id).exec();
     }
}

module.exports = UserRepository;