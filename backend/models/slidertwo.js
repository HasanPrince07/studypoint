const mongoose = require('mongoose')

const slidertwoSchema = mongoose.Schema({
    numberone: String,
    textone: String,
    txtone: String,
    numbertwo: String,
    texttwo: String,
    txttwo: String,
    numberthree: String,
    textthree: String,
    txtthree: String,
    numberfour: String,
    textfour: String,
    txtfour: String,
    img: String
})

module.exports = mongoose.model('slidertwo', slidertwoSchema)