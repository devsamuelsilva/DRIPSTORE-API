import express from 'express'
import { connect } from './DB/db.js'
const app = express()

const HOST = 'localhost'
const PORT = 3000

app.get('/', (req, res) => {
  res.send({
    message: 'Hello World!',
    status: 200
  })
})

connect();

app.listen(PORT, () => {
  console.log(`Example app listening on port https://${HOST}:${PORT}`)
})