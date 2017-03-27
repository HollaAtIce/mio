const mongoose = require('mongoose')
const Schema = mongoose.Schema

const casaSchema = new Schema({
    name: {
        type: String,
        required: false
    }
})

// define our hacker model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Hacker', casaSchema)
