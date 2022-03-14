'use strict'

const index = require('./app.js')

const server = index.app.listen(index.port, () => {
  const port = server.address().port
  console.log(port)

  const message = 'Server started on port ' + port

  console.log(message)
})
