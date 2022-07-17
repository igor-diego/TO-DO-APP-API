import express from 'express'

import usuarioController from './controllers/usuario-controllers.js'
import tarefaController from './controllers/tarefa-controllers.js'
const app = express()
const port = 3000



app.listen(port, () => {
console.log(`http://localhost:${port}/`);
})