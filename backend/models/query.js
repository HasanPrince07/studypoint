const mongoose = require('mongoose')

const querySchema = mongoose.Schema({
    email: String,
    number: Number,
    query: String,
    status: { type: String, default: 'unsend' }
})

module.exports = mongoose.model('query', querySchema)