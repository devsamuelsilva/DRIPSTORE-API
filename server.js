import express from 'express'
import { connect } from './DB/db.js'
import { produtoRoute } from './routes/produto.routes.js'
const app = express()

const HOST = 'localhost'
const PORT = 3000

connect();

app.get('/', (req, res) => {
  res.send({
    message: 'Hello World!',
    status: 200
  })
})

produtoRoute(app);

app.listen(PORT, () => {
  console.log(`Example app listening on port https://${HOST}:${PORT}`)
})