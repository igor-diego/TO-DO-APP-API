const usuarioControllers = (app) => {
    
    app.get('/usuario', (req, res) => {
        res.send('Rota GET para usuario')
    })
}