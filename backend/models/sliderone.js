const mongoose = require('mongoose')

const slideroneSchema = mongoose.Schema({
    text: String,
    img: String
})

module.exports = mongoose.model('sliderone', slideroneSchema)