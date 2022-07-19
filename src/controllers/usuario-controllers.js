

const usuarioController = (app) => {

    app.get('/usuario', (req, res) => {
        res.json({"msg": 'Rota GET para usuario'})
    })

    app.post('/usuario', (req, res) => {
        console.log(req.body);
        res.json({"rota" : "Rota POST para usuario"})
    })
}

export default usuarioController