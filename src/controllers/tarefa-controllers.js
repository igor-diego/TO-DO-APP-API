import Tarefa from "../models/tarefa.js"

const tarefaController = (app) => {

    app.get('/tarefa', (req, res) => {
        res.json({"mesg": "Rota GET para tarefa"})
    })

    app.post('/tarefa', (req, res) => {
        const body = req.body
        const tarefa = new Tarefa(body.titulo, body.descrição, body.status, body.dataDeCriação) 
        res.json(tarefa)
    })
}

export default tarefaController