const Course = require('../models/course')
const helper = require('../helper/messages')

exports.addcourse = async (req, res) => {
    const { fname, lname, number, dob, course, globalemail } = req.body
    try {
        const match = await Course.findOne({ email: globalemail })
        if (match === null) {
            const record = new Course({ fname: fname, lname: lname, number: number, dob: dob, course: course, email: globalemail })
            record.save()
            res.json({
                status: helper.status201,
                message: helper.message201,
                bRecord: helper.record
            })
        } else {
            res.json({
                status: helper.status500
            })
        }
    } catch (error) {
        res.json({
            status: helper.status400,
            message: helper.message400
        })
    }
}

exports.modulecheck = async (req, res) => {
    const { globalemail } = req.body
    try {
        const record = await Course.findOne({ email: globalemail })
        const role = record.role
        if (role === 'private') {
            res.json({
                status: helper.status200,
                message: helper.message200,
                bRecord: 'private'
            })
        } else {
            res.json({
                status: helper.status200,
                message: helper.message200,
                bRecord: 'public'
            })
        }
    } catch (error) {
        res.json({
            status: helper.status500,
            message: helper.message500,
        })
    }
}

exports.showadminregister = async (req, res) => {
    try {
        const record = await Course.find()
        res.json({
            status: helper.status200,
            message: helper.message200,
            bRecord: record
        })
    } catch (error) {
        res.json({
            status: helper.status500,
            message: helper.message500,
        })
    }
}

exports.updaterole = async (req, res) => {
    const id = req.params.id
    try {
        const record = await Course.findById(id)
        let newrole = null
        if (record.role === 'public') {
            newrole = 'private'
        } else {
            newrole = 'public'
        }
        await Course.findByIdAndUpdate(id, { role: newrole })
        res.json({
            status: helper.status200,
            message: helper.message200,
            bRecord: record
        })
    } catch (error) {
        res.json({
            status: helper.status500,
            message: helper.message500
        })
    }
}

exports.coursedelete = async (req, res) => {
    const id = req.params.id
    try {
        await Course.findByIdAndDelete(id)
        const record = await Course.findById(id)
        res.json({
            status: helper.status200,
            message: helper.message200,
            bRecord: record
        })
    } catch (error) {
        res.json({
            status: helper.status500,
            message: helper.message500
        })
    }
}