const mongoose = require('mongoose')

const serviceSchema = mongoose.Schema({
    sname: String,
    sdesc: String,
    sldesc: String,
    simg: String
})

module.exports = mongoose.model('service', serviceSchema)