import express from 'express'
const app = express()

const HOST = 'localhost'
const PORT = 3000

app.get('/', (req, res) => {
  res.send({
    message: 'Hello World!',
    status: 200
  })
})

app.listen(PORT, () => {
  console.log(`Example app listening on port https://${HOST}:${PORT}`)
})