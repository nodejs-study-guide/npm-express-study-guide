'use strict'

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const path = require('path')
const morgan = require('morgan')
const debug = require('debug')('myApp') // the 'require' returns a function so we call that function straight away. 

app.use(morgan('combined'))



app.get('/', (req, res) => {
  res.send('hello from my app')
})

// here we get the router "object" that will handle the routing. 
const router = require('./router/router')
// here we say that any calles to '/api/ and 'apiv2' to be forwarded to the router object'
app.use('/api/', router)
app.use('/apiv2/', router)


debug("should now have started")


module.exports = {
  app: app,
  port: port
}