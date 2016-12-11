###API Node.js, Express and MongoDB with Mongoose and Repository Pattern

It is an approach for Repository Patern using Mongoose, just for
personal studies

## Install
```bash

# clone
git clone https://github.com/felipeblini/fcamara-teste-api

# Install dependencies
yarn

# run
npm start

```

### API Endpoints

Action | URL | Parameters | Method | Returns | Example
------ | --- | ---------- | ------ | ------- | -------
List All Users | /users | -- | POST | Json list of all users | http://localhost:300/users
Create new user | /users/create | A valid User json | POST | Json with the created user | curl http://localhost:3000/users -X POST -v -H "Content-type: application/json" -d '{ "nome": "string-nome", "email": "string-email", "senha": "string-senha", "profile": "User", "telefones": [ { "numero": "123456789", "ddd": "11" } ] }'
Find User By Id | /users/:id | userId | GET | Json with the found user | http://localhost:3000/users/5848aabeaba4334c0878d0ef