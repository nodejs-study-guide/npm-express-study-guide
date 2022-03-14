'use strict'

const express = require('express')
const app = express()
const port = 3000
const path = require('path') // this is a builtin package, so need to: npm install package


app.get(express.static(path.join(__dirname, "/public/")))

app.get('/', (req, res) => {
  res.send('hello from my app')
})


module.exports = {
  app: app,
  port: port
}
