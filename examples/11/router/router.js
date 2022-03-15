'use strict'

const express = require('express')

const router = express.Router()


// We use colon to create a variable called userID. Then we can access it with req.params.userID
router.get('/name/:userID', (req, res) => {
	res.send('my name is John and my id is: ' + req.params.userID)
})

module.exports = router