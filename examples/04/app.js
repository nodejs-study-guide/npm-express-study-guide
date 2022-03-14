'use strict'

const express = require('express')
const app = express()
const port = 3000
const path = require('path') // this is a builtin package, so need to: npm install package
const morgan = require('morgan')


app.use(morgan('combined')) // this is a debug feature that prints info on the cli everytime it receives a request. 

const publicFolder = path.join(__dirname, '/public/')
app.use(express.static(publicFolder))

app.get('/', (req, res) => {
  res.send('hello from my app')
})


module.exports = {
  app: app,
  port: port
}
