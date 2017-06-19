const express = require('express')
const router = express.Router()
const aboutController = require('../controllers/about.controller')()
module.exports = router

// api router
router.get('/about', aboutController.getAll)

router.use('/', function(req, res) {
    console.log('User Route')
    console.log('Request Type:' + req.method)
    res.send('This page was not found')
})
