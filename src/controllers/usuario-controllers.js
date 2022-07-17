const usuarioController = (app) => {

    app.get('/usuario', (req, res) => {
        res.send('Rota GET para usuario')
    })

    app.post('/usuaroi', (req, res) => {
        res.send('Rota POST para usuario')
    })
}

export default usuarioController