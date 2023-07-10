const mongoose = require('mongoose')

const offerSchema = mongoose.Schema({
    btntext: String,
    text: String,
})

module.exports = mongoose.model('offer', offerSchema)