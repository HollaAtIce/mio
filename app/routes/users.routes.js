const router = require('express').Router()
const usersController = require('../controllers/users.controller')

module.exports = router

router.post('/register', usersController.register)
router.post('/login', usersController.login)