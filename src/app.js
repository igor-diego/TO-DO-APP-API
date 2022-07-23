import express from 'express'

import usuarioController from './controllers/usuario-controllers.js'
import tarefaController from './controllers/tarefa-controllers.js'

const app = express()
const port = 3000

app.use(express.json())

usuarioController(app)
tarefaController(app)

app.listen(port, () => {
console.log(`http://localhost:${port}/`)
})