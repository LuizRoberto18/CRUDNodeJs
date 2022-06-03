//Importar o express
const express = require("express");
const server = express();
//inportando o bd
const db = require("./models/db");
//function para o express reconhecer informações JSON
server.use(express.json());
//inportando Cursos
const Curso = require("./models/curso");
//lista de cursos
//const cursos = ["fullStack master", "desenvolvimento mobile", "Desenvolvedor back-end"];

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


// retornar todos os cursos
server.get("/cursos", async(req, res) => {
    //return res.json(Curso.body);
    await Curso.findAll(req.body).then(data => {
        res.json(data);
    }).catch(() => {
        return res.status(500).json({
            erro: true,
            mensagem: "ERRO Curso não cadastrado com sucesso"
        })
    });
});

// retorna um curso
server.get("/cursos/:id", async(req, res) => {
    const id = req.params.id;
    await Curso.findByPk(id).then(data => {
        res.json(data);
    }).catch(() => {
        return res.status(500).json({
            erro: true,
            mensagem: "ERRO ao atualizar curso de id: " + id
        })
    });

    /* const { index } = req.params;

     return res.json(cursos[index]);*/
});

// criar um novo curso
server.post("/cursos", async(req, res) => {
    //console.log(req.body);
    await Curso.create(req.body).then(() => {
        return res.json({
            erro: false,
            mensagem: "Curso cadastrado com sucesso"
        })
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "ERRO Curso não cadastrado com sucesso"
        })
    });
    //return res.send("cadastrado");
    /*const { name } = req.body;
    cursos.push(name);
    // no Insomnia fica: "name": "NodJs"
    return res.json(cursos);*/
});

// atualizar um curso
server.put("/cursos/:id", async(req, res) => {
    const id = req.params.id;

    await Curso.update(req.body, { where: { id: id } }).then(() => {
        return res.json({
            erro: false,
            mensagem: "Curso atualizado com sucesso"
        })
    }).catch(() => {
        return res.status(500).json({
            erro: true,
            mensagem: "ERRO Curso não atualizado com sucesso"
        })
    });
    /*const { index } = req.params;
    const { name } = req.body;

    cursos[index] = name;
    
    return res.json(cursos);*/
});

// deletar um curso
server.delete("/cursos/:id", async(req, res) => {
    const id = req.params.id;

    await Curso.destroy(req.body, { where: { id: id } }).then(() => {
        return res.json({
            erro: false,
            mensagem: "Curso Deletado com sucesso"
        })
    }).catch(() => {
        return res.status(500).json({
            erro: true,
            mensagem: "ERRO Curso não Deletado com sucesso"
        })
    });
    /* const { index } = req.params;
     //function para remover um elemento
     cursos.splice(index, 1);
     // no insomnia fica: colocar o Id do curso > send
     return res.json({ message: "O curso foi deletado" });
     */
});

//servidor está rodando na porta 3000
server.listen(3000);