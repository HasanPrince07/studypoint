const mongoose = require('mongoose')

const sliderthreeSchema = mongoose.Schema({
    headingone: String,
    textone: String,
    headingtwo: String,
    texttwo: String,
    img: String
})

module.exports = mongoose.model('sliderthree', sliderthreeSchema)