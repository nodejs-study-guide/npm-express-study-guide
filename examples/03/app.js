'use strict'

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('hello from my app')
})

module.exports = {
  app: app,
  port: port
}
