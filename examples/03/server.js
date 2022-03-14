'use strict'

const index = require('./app.js')

const server = index.app.listen(index.port, () => {
  const port = server.address().port
  console.log(port)

  let message = "Server started at: https://" + host + ":" + port

  console.log(message)
})
