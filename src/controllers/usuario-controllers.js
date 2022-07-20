import Usuario from "../models/usuario.js"

const usuarioController = (app) => {

    app.get('/usuario', (req, res) => {
        // const usuario = new Usuario()
        //usuario
        res.json({"usuarios": pegaUsuarios()})
    })

    app.post('/usuario', (req, res) => {
        const body = req.body
        const usuario = new Usuario(body.nome, body.email, body.senha)
        usuario.insereUsuario(usuario)
        res.json(usuario)
    })
}

export default usuarioController