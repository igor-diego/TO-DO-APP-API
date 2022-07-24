let id = 0

class validacaoTarefa {
    constructor(titulo, descricao,status) {
        this.id = id++
        this.titulo = titulo
        this.descricao = descricao
        this.status 
        this.dataCriacao = new Date()
    }

    validaStatus = (status) => {
        const statusValido = ['A fazer', 'Fazendo', 'Concluido']
        if(statusValido.indexOf(status) <0) {
            throw new Error('Status invalido. Status deve ser: A fazer, Fazendo ou Concluido')

        }else {
            return status
        }
    }
    
}

export default validacaoTarefa