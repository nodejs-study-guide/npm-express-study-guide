'use strict'

const express = require('express')

const router = express.Router()


// Here, we're adding a "get" route for this object.
router.get('/name/', (req, res) => {
	res.send('my name is John')
})

// we are just exporting the entire router object, which including the aboce "get" routing definition. 
module.exports = router