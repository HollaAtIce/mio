const express = require('express')
const app = express()
require('dotenv').config()
// const bodyParser = require('body-parser')
// const methodOverride = require('method-override')
const mongoose = require('mongoose')
const path = require('path')
// const passport = require('passport')
// const session = require('express-session')
// const expressValidator = require('express-validator')
// const fs = require('fs')

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'))
})

// app.use('/public', express.static(path.join(__dirname, 'public'), {
//     fallthrough: false
// }))

app.use(function(err, req, res, next) {
    if (err) {
        res.sendStatus(404)
    }
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

// app.use((req, res) => {
//     res.send('HELLO FROM ISAACPANTS')
// })

// app.use(require('./app/routes'))

app.listen(port, () => {
    console.log(`On the corner of port ${port}`)
})
