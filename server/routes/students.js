const express = require('express')
const { loginStud } = require('../controllers/students')
const router = express.Router()
router.post('/logstud', loginStud)
module.exports = router