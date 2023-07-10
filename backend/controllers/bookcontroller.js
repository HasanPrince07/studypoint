const Offer = require('../models/offer')
const helper = require('../helper/messages')


exports.showbookdata = async (req, res) => {
    try {
        const record = await Offer.findOne()
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

exports.adminshowbookdata = async (req, res) => {
    try {
        const record = await Offer.findOne()
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

exports.adminupdatebookdata = async (req, res) => {
    const id = req.params.id
    try {
        const record = await Offer.findById(id)
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

exports.adminupdatebookdataone = async (req, res) => {
    const id = req.params.id
    const { btntext, offertext } = req.body
    try {
        await Offer.findByIdAndUpdate(id, { btntext: btntext, text: offertext })
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