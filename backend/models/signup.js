const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: String,
    password: String,
    fname: { type: String, default: '' },
    lname: { type: String, default: '' },
    img: String
})

module.exports = mongoose.model('user', userSchema)