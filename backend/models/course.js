const mongoose = require('mongoose')

const fulldate = new Date()
const newdate = `${fulldate.setDate()}/${fulldate.setMonth()}/${fulldate.setFullYear()}`

const courseSchema = mongoose.Schema({
    fname: String,
    lname: String,
    number: Number,
    dob: { type: String, default: newdate },
    course: String,
    role: { type: String, default: 'public' },
    email: String
})

module.exports = mongoose.model('course', courseSchema)