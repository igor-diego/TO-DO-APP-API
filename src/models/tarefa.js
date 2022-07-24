import bd from "../database/bd.js"

class TarefaModel {

    insereTarefa = (tarefa) => {
        bd.tarefa.push(tarefa)
    }

    pegaTarefa = () => {
        return bd.tarefa
    }

    pegaUmaTarefa = (titulo) => {
        return bd.tarefa.filter(tarefa => tarefa.titulo === titulo)
    }

    deletaTarefa = (titulo) => {
        const newBd = bd.tarefa.filter(tarefa => tarefa.titulo !== titulo)
        bd.tarefa = newBd
    }

    atualizaTarefa = (titulo, novosDados) => {
        const newBd = bd.tarefa.map(tarefa => {
            if(tarefa.titulo === titulo) {
                return {
                    "id": tarefa.id,
                    "titulo": novosDados.titulo || tarefa.titulo,
                    "descricao": novosDados.descricao || tarefa.descricao,
                    "status": novosDados.status || tarefa.status,
                    "dataCriacao": tarefa.dataCriacao
                }
            }
            return tarefa
        })
        bd.tarefa = newBd
    }

}

export default TarefaModel