'use strict'

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const path = require('path')
const morgan = require('morgan')
const debug = require('debug')('myApp') 

app.use(morgan('combined'))



app.get('/', (req, res) => {
  res.send('hello from my app')
})

const router = require('./router/router')
app.use('/api/', router)
app.use('/apiv2/', router)


debug("should now have started")


module.exports = {
  app: app,
  port: port
}