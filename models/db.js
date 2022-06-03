//inportando sql
const Sequelize = require("sequelize");

//conexão com o bando de dados
const conexao = new Sequelize("bd_teste", "root", "", {
    host: 'localhost',
    dialect: 'mysql'
});

//verifando se a conexao foi ok
conexao.authenticate()
    .then(function() {
        console.log("conexão realizada com sucesso!!")
    }).catch(function() {
        console.log("erro ao se conectar no banco de dados!!")
    })

//importando a conexão
module.exports = conexao;