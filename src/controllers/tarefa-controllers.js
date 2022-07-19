const tarefaController = (app) => {

    app.get('/tarefa', (req, res) => {
        res.json({"mesg": 'Rota GET para tarefa'})
    })

    app.post('/tarefa', (req, res) => {
        res.json({"msg": 'Rota POST para tarefa'})
    })
}

export default tarefaController