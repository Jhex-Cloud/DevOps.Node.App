const express = require('express')
const router = express.Router()
const recepies = require('../Database/')

router.get('/all', (req, res) => res.json(recepies))

module.exports = router