const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
    // name field
    nome: {
        type: String,
        // custom validation for name
        validate: {
          validator: function(value) {
              return value.length >= 3;
          },
          message: 'Name must have at least 3 characters'
        },
        required: [true, 'Name is required']
    },
    // email field
    email: { 
        type: String,
        // email cannot be duplicated
        index: { 
            unique: true 
        },
        // custom validation for email
        validate: {
          validator: function(value) {
              var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              return pattern.test(value);
          },
          message: '{VALUE} is not a valid email'
        },
        required: [true, 'Email is required']
    },
    // password field
    senha: {
        type: String,
        // custom validation for password
        validate: {
          validator: function(value) {
              return value.length >= 6;
          },
          message: 'Password must have at least 6 characters'
        },
        required: [true, 'Password is required']
    },
    // list of phone numbers
    telefones: {
        type: [
            {
                _id : false,
                // DDD of the phone
                ddd: {
                    type: Number,
                    min: [10, 'DDD must be greather than 10'],
                    // custom validation for DDD
                    validate: {
                        validator: function(value) {
                            return String(value).length >= 2;
                        },
                        message: 'DDD must have at least 2 characters'
                    },
                },
                // the phone number
                numero: {
                    type: Number,
                    min: [1, 'Phone number must be greather than 0'],
                    // custom validation for phone number
                    validate: {
                        validator: function(value) {
                            return String(value).length >= 8;
                        },
                        message: 'Phone number must have at least 8 characters'
                    },
                }
            }
        ] 
    },
    profile: {
        type: String,
        enum: ['User', 'Admin'],
    },
    data_criacao: {
        type: Number 
    },
    data_atualizacao: { 
        type: Number 
    },
    ultimo_login: { 
        type: Number 
    },
    token: { 
        type: String 
    }
});

User.pre('save', function (next) {
  this.log('saving user...');
  next();
});

User.post('save', function (doc) {
  this.log('user saved!');
});

User.method('log', function(message) {
    console.log('log: ' + message);
});

module.exports = mongoose.model('User', User);