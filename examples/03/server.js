'use strict'

const index = require('./app.js')

const server = index.app.listen(index.port, () => {
  console.log('listening on port 3000')
})
