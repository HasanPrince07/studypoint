const mongoose = require('mongoose')

var fulldate = new Date()
var newdate = `${fulldate.getDate()}/${fulldate.getMonth()}/${fulldate.getFullYear()}`

const testiSchema = mongoose.Schema({
    cname: String,
    cdesc: String,
    cimg: String,
    status: { type: String, default: 'unpublish' },
    date: { type: String, default: newdate }
})

module.exports = mongoose.model('testi', testiSchema)