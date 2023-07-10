const mongoose = require('mongoose')

const coursedetaileSchema = mongoose.Schema({
    cname: String,
    cduration: String,
    cformat: String,
    cfees: Number,
    ctool: String,
})

module.exports = mongoose.model('coursedetaile', coursedetaileSchema)