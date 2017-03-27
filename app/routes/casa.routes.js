const router = require('express').Router()
const casaController = require('../controllers/casa.controller')()

module.exports = router

// api router
router.get('/', casaController.getAll)