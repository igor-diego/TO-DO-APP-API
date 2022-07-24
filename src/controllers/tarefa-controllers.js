import TarefaModel from "../models/tarefa.js"
import validacaoTarefa from "../services/validacaoTarefa.js"

const tarefaController = (app) => {
    const tarefaModel = new TarefaModel()

    app.get('/tarefa', (req, res) => {
        const tarefa = tarefaModel.pegaTarefa()
        res.json(
            {"Tarefas": tarefa,
            "erro": false}
        )

        app.get('/tarefa/titulo/:titulo', (req, res) => {
            const titulo = req.params.titulo
            const tarefa = tarefaModel.pegaUmaTarefa(titulo)
            res.json(
                {"Tarefa": tarefa,
            "erro" : false}

            )
        })

        app.post('/tarefa', (req, res) => {
            const body = req.body

            try {
                const novaTarefa = new validacaoTarefa(body.titulo, body.descricao, body.status)
                tarefaModel.insereTarefa(novaTarefa)
                res.json(
                    {"Msg": "Tarefa inserida com sucesso",
                    "Tarefa": novaTarefa,
                    "erro": false}
                )
            }catch (error) {
                res.json(
                    {"Msg": error.message,
                    "erro": true}
                )
            }

        })
    })

    app.delete('/tarefa/titulo/:titulo', (req, res) => {
        const titulo = req.params.titulo
        tarefaModel.deletaTarefa(titulo)

        res.json(
            {"Msg": `Tarefa com titulo ${titulo} deletada com sucesso`,
            "error": false
            })
    })

    app.put('/tarefa/titulo/:titulo', (req, res) => {
        const body = req.body
        const titulo = req.params.titulo

        try {
            const novosDados = new validacaoTarefa(body.titulo, body.descricao, body.status)
            tarefaModel.atualizaTarefa(titulo, novosDados)

            res.json({
                "Msg": `Tarefa com titulo ${titulo} atualizada com sucesso`,
                "erro": false
            })

        }catch (error) {
            res.json({
                "Msg": error.message,
                "erro": true
            })
        }
    })

}
export default tarefaController