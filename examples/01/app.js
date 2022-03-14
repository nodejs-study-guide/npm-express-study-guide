'use strict'

const express = require('express')

const app = express()

// This get basically means if this endpoint is requested, then run this javascript arrow function:
app.get('/', (req, res) => {
  res.send('hello from my app')
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
