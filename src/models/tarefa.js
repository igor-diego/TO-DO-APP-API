import bd from "../database/bd.js"

let id = 0
class Tarefa {
    constructor(titulo, descrição, status, dataDeCriação) {
        this.id = id++
        this.titulo = titulo
        this.descrição = descrição
        this.status = status
        this.dataDeCriação = dataDeCriação
   }

}

export default Tarefa