const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()
const path = require('path')
const methodOverride = require('method-override')
// const passport = require('passport')
// const session = require('express-session')
// const expressValidator = require('express-validator')

// parse application/json
app.use(bodyParser.json())

// pars application/vnd.api+json as json
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}))

// parse applications/x-www-form-urlenconded
app.use(bodyParser.urlencoded({
    extended: true
}))

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'))

// static files =======================================
app.use('/public', express.static(path.join(__dirname, 'public'), {
    fallthrough: false
}))

// handle 404 =========================================
app.use(function(err, req, res, next) {
    console.log(err.stack)
    res.sendStatus(404)
})

app.use(function(req, res, next) {
    console.log('Time:' + Date.now())
    next()
})

// config stuff
const port = process.env.PORT || 8888

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017')

process.on('SIGINT', function() {
    mongoose.connection.close(function() {
        console.log('Mongoose default connection disconnected thru app termination')
        process.exit(0)
    })
})

// routes =====================================
app.use(require('./app/routes/index.routes.js'))

// start the app thang =========================
app.listen(port, () => {
    console.log(`On the corner of port ${port}`)
})

module.exports = app
