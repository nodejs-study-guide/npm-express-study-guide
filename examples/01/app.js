'use strict'

const express = require('express')

const app = express()

// This get basically means if this endpoint is requested, then existing this javascript function:
app.get('/', (req, res) => {
  res.send('hello form my app')
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
