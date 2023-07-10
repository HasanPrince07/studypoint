const Coursedetail = require('../models/coursedetaile')
const helper = require('../helper/messages')

exports.showcoursedetail = async (req, res) => {
    try {
        const record = await Coursedetail.findOne()
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

exports.showadmincoursedetail = async (req, res) => {
    try {
        const record = await Coursedetail.findOne()
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

exports.showadmincoursedetailbyid = async (req, res) => {
    const id = req.params.id
    try {
        const record = await Coursedetail.findById(id)
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

exports.updatecoursedetail = async (req, res) => {
    const id = req.params.id
    const { cname, cduration, cformat, cfees, ctool } = req.body
    try {
        await Coursedetail.findByIdAndUpdate(id, { cname: cname, cduration: cduration, cformat: cformat, cfees: cfees, ctool: ctool })
        res.json({
            status: helper.status200,
            message: helper.message200
        })
    } catch (error) {
        res.json({
            status: helper.status500,
            message: helper.message500
        })
    }
}