import Usuario from "../models/usuario.js"
import ValidaUsuario from "../../services/validacaoUsuario.js"

// funçao que vai receber a instancia do servidor como parametros
// e vai agrupar todos metodos que representam as rotas
const usuarioController = (app) => {
    // Rotas com mesmo caminho ('/usuario'), mas com verbos diferentes
    // são rotas diferentes

    // cria uma instancia do classe model usuario que sera usada para todas rotas
    const usuarioModel = new Usuario()

    app.get('/usuario', (req, res) => {
        const  todosUsuarios = usuarioModel.pegaUsuarios()
        // responde a requisição usando o metodo para pegar todos usuarios
        res.json({
            "usuario": todosUsuarios,
            "erro": false}

        )
    })

    // ROTA PARA PEGAR UM DADO ESPECIFICO BASEADO NO PARAMETRO ENVIADO
    app.get('/usuario/email:email', (req, res) => {
        // RECEBE O PARAMETRO DA ROTA
        const email = req.params.email
        
        // CHAMA O METODO QUE FAZ A BUSCA NO BD BASEADO NO PARAMETRO ENVIADO COMO FILTRO
        const usuario = usuarioModel.pegaUmUsuario(email)

        // RESPONDE A REQUISIÇÃO USANDO O METODO O METODO PARA PEGAR TODOS USUARIOS

        res.json({
            "usuario": usuario,
            "error": false}
        )
    })


    app.post('/usuario', (req, res) => {
        
        const body = req.body
        try {
            // CRIA UMA INSTANCIA DE USUARIO COM OS DADOS RECEBIDOS DA REQUISIÇÃO
            const usuarioNovo = new ValidaUsuario(body.nome, body.email, body.senha)
            
            // CHAMA O METODO PARA INSERIR O USUARIO NO BD
            usuarioModel.insereUsuario(usuarioNovo)

            // RETORNA UM JSON COM UMA MENSAGEM E COM USUARIO INSERIDO
            res.json(
                {"MSG": "Usuario inserido com sucesso",
                "Usuario": usuarioNovo,
                "erro": false
            })
        } catch (error) {
            res.json(
                {"MSG": error.message,
                "error": true
                }
            )
        }
    
    })

    // ROTA PARA DELETAR USUARIOS
    app.delete('/usuario/email/:email', (req, res) => {
        const email = req.params.email
        usuarioModel.deletaUsuario(email)

        res.json(
            {"MSG": `Usuario com ${email} deletado com sucesso`,
            "erro":false
            }
        )
    })

    // ROTA PARA ATUALIZAR USUARIOS
    app.put('/usuario/email/:email', (req, res) => {
        const body = body.req
        const email = req.params.email
        try {
            const novosDados = new ValidaUsuario(body.nome, body.email, body.senha)
            usuarioModel.atualizaUsuario(email, novosDados)
            res.json(
                {"MSG": `Usuario com ${email} atualizado com sucesso`,
                "Usuario": novosDados,
                "error" : false
                }
            )
        } catch(error) {
            res.json(
                {
                "MSG": error.message,
                "erro" : true
                }
            )
        }
    })
}

export default usuarioController