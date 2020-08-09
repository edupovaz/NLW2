import express from 'express'
import routes from './routes'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

//GET : Buscar ou listar informações
//POST : Criar informações
//DELETE : Deletar informações
//PUT : Atualizar uma informação 

app.use(routes)

app.listen(3333)

