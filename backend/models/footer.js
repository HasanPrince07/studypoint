const mongoose = require('mongoose')

const footerSchema = mongoose.Schema({
    website: String,
    location: String,
    email: String,
    phone: Number,
    linkdin: String,
    snapchat: String,
    facebook: String,
    instagram: String,
})

module.exports = mongoose.model('footer', footerSchema)