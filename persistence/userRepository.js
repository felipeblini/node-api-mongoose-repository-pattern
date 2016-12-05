class UserRepository {
    constructor (connection) {
        this._connection = connection;
    }

     salvar(user) {
         console.log('saving user" ' + user);
     }

     listar() {
         console.log('listing users');

         let listaDeUsuarios = [
                { 
                    nome1: "string",
                    email: "string",
                    senha: "senha",
                    telefones: [ 
                        { 
                            numero: "123456789",
                            ddd: "11"
                        }]
                },
                { 
                    nome1: "string",
                    email: "string",
                    senha: "senha",
                    telefones: [ 
                        { 
                            numero: "123456789",
                            ddd: "11"
                        }]
                }
            ];

         return listaDeUsuarios;
     }

     buscarPorId(id) {
         console.log('finding user by id: ' + id);
     }
}

module.exports = UserRepository;