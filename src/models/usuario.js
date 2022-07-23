import bd from "../database/bd.js"

let id = 0

class Usuario {

    // metodo para insercao do usuario no banco de dados
    insereUsuario = (usuario) => {
        bd.usuario.push(usuario)
    }


    // metodo para pegar todos usuarios do banco de dados
    pegaUsuarios = () => {
        return bd.usuario
    }

    pegaUmUsuario = (email) => {
        // essa função serve para fazer uma querry
        return bd.usuario.filter(usuario => usuario.email === email)
    }

    deletaUsuario = (email)=> {
        const newBd = bd.usuario.filter(usuario => usuario !== email)
        bd.usuario = newBd
    }

    atualizaUsuario = (email, novosDados) => {
        const newBd = bd.usuario.map(usuario => {
            if(usuario.email === email) {
                return {
                    "id": usuario.id,
                    "nome": novosDados.nome || usuario.nome,
                    "email": novosDados.email || usuario.email,
                    "senha": novosDados.senha || usuario.senha
                }
            }
            return usuario
        })
        bd.usuario = newBd
    }
}

export default Usuario