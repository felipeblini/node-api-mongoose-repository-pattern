var env = process.env.NODE_ENV || 'development';

var config = {
    development: {
        db: 'mongodb://localhost/concrete-users-development'
    },
    production: {
        db: 'mongodb://felipe:ga$$369@ds033116.mlab.com:33116/d4udb'
    }
}; 

module.exports = config[env];
