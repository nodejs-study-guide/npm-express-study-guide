'use strict'

const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const morgan = require('morgan')
const debug = require('debug')('myApp') // the 'require' returns a function so we call that function straight away. 

app.use(morgan('combined'))

const publicFolder = path.join(__dirname, '/public/')
app.use(express.static(publicFolder))

app.get('/', (req, res) => {
  res.send('hello from my app')
})

debug("should now have started")


module.exports = {
  app: app,
  port: port
}
