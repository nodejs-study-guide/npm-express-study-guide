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




// Here we used router to breakdown a endpoint into smaller bits.
// let's take the endpoint "http://localhost:3000/api/name" as an example
let router = express.Router()

// here we say any endpoint starting with "/api" should be forward to the "router" object.
// i.e. it essentially a "/api/*" wildcard, as described in - https://expressjs.com/en/4x/api.html#app.use

app.use('/api/', router)
app.use('/apiv2/', router)

// here we can ignore teh "/apixxx" part of the routing, and focus on the next element, which is "name"
// this get's triggered with either of the following:
// - http://localhost:3000/api/name
// - http://localhost:3000/api/name


router.get('/name/', (req, res) => {
  res.send('my name is John')
})


debug("should now have started")


module.exports = {
  app: app,
  port: port
}
