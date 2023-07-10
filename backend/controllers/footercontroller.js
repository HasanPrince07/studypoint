const Footer = require('../models/footer')
const helper = require('../helper/messages')

exports.showfooter = async (req, res) => {
    try {
        const record = await Footer.findOne()
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

exports.showadminfooter = async (req, res) => {
    try {
        const record = await Footer.findOne()
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

exports.showfooterbyid = async (req, res) => {
    const id = req.params.id
    try {
        const record = await Footer.findById(id)
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

exports.updatefooter = async (req, res) => {
    const id = req.params.id
    const { website, location, email, phone, linkdin, snapchat, facebook, instagram } = req.body
    try {
        await Footer.findByIdAndUpdate(id, { website: website, location: location, email: email, phone: phone, linkdin: linkdin, snapchat: snapchat, facebook: facebook, instagram: instagram })
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