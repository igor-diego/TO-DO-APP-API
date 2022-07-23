let id = 0

class ValidaUsuario {
    constructor(nome,email,senha) {
        this.id = id++,
        this.nome = nome,
        this.email = this.validaEmail(email)
        this.senha = this.validaSenha(senha)
    }


    //METODO PARA VALIDAR SENHA
    validaSenha = (senha) => {
        if(senha) {
            if(senha.length >= 6) {
                return senha
            }else {
                throw new Error('A senha precisa ter 6 ou mais digitos.')
            }
        }else {
            throw new Error('Insira uma senha com 6 ou mais digitos.')
        }
    } 

        //METODO PARA VALIDAR EMAIL
        validaEmail = (email) => {
            if(email) {
                if(email.includes('@')) {
                    return email
                }else {
                    throw new Error('Email inválido')
                }
            }else {
                throw new Error('Insira um email')
            }
        }

}

export default ValidaUsuario