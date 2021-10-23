//Importar o express
const express = require("express");
const server = express();

server.use(express.json());

const cursos = ["fullStack master", "desenvolvimento mobile", "viver de node js"];

// CRUD --> create, Read, Update, Delete
/*
    Comandos basicos NodeJs
    npm init: inicia o projeto Nodejs
    micro fremoWorck Express: npm install express
    a pasta  node_modules é onde fica todas as dependências que o CRUD necessita
*/
/* 
    Verficado com o uso do Insomnia
    link para baixar: https://insomnia.rest/download
    comandos na tela:
        creaate > request collection > "nome da aplicação" > create
    criar requisição:
        "sinal de +" > new Request > "nome da requisição" > create
    Duplicar a requisição e mudar o Tipo para cada requisição
    colocar o link : http://localhost:3000/cursos > send


*/
// retorna um curso
server.get("/cursos/:index", (req, res) => {
    const { index } = req.params;

    return res.json(cursos[index]);
});

// retornar todos os cursos
server.get("/cursos", (req, res) => {
    return res.json(cursos);
});

// criar um novo curso
server.post("/cursos", (req, res) => {
    const { name } = req.body;
    cursos.push(name);
    // no Insomnia fica: "name": "NodJs"
    return res.json(cursos);
});

// atualizar um curso
server.put("/cursos/:index", (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    cursos[index] = name;
    // no insomnia fica: colocar um Id no link, "name": "novoNome"
    return res.json(cursos);
});

// deletar um curso
server.delete("/cursos/:index", (req, res) => {
    const { index } = req.params;

    cursos.splice(index, 1);
    // no insomnia fica: colocar o Id do curso > send
    return res.json({ message: "O curso foi deletado" });
});

server.listen(3000);