const Sequelize = require("sequelize");
const db = require("./db");

const Curso = db.define('cursos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

//criar a tabela caso não exista
//Curso.sync();

module.exports = Curso;