const tarefaController = (app) => {

    app.get('/tarefas', (req, res) => {
        res.send('Rota GET para tarefa')
    })

    app.post('/tarefa', (req, res) => {
        res.send('Rota POST para tarefa')
    })
}

export default tarefaController