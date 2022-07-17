const tarefaController = (app) => {
    
    app.get('/tarefas', (req, res) => {
        res.send('Rota GET para tarefas')
    })
}