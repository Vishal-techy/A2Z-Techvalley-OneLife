const express = require('express')
var cors = require('cors')
const app = express()
const port = 9000

app.use(cors())
app.get('/pulse', (req, res) => {
  let x = Math.floor((Math.random() * 100) + 50);
  res.json({"data" : x})
})

app.get('/bpm', (req, res) => {
    let x = Math.floor((Math.random() * 100) + 50);
    res.json({"data" : x})
  })

  app.get('/spo2', (req, res) => {
    let x = Math.floor((Math.random() * 100) + 50);
    res.json({"data" : x})
  })

  app.get('/ibp', (req, res) => {
    let x = Math.floor((Math.random() * 100) + 50);
    res.json({"data" : x})
  })

  app.get('/res', (req, res) => {
    let x = Math.floor((Math.random() * 100) + 50);
    res.json({"data" : x})
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})