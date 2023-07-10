const mongoose = require('mongoose')

const topicSchema = mongoose.Schema({
    name: String,
    video: String
})

module.exports = mongoose.model('topic', topicSchema)