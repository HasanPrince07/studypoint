const Testi = require('../models/testi')
const helper = require('../helper/messages')


exports.addtesti = (req, res) => {
    const file = req.file.filename
    const { name, desc } = req.body
    try {
        const record = new Testi({ cname: name, cdesc: desc, cimg: file })
        record.save()
        res.json({
            status: helper.status201,
            message: helper.message201
        })
    } catch (error) {
        res.json({
            status: helper.status400,
            message: helper.message400
        })
    }
}

exports.showtesti = async (req, res) => {
    try {
        const record = await Testi.find({ status: 'publish' })
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

exports.showtestidata = async (req, res) => {
    try {
        const record = await Testi.find()
        const totaltesti = await Testi.find().count()
        const publishtesti = await Testi.find({ status: 'publish' }).count()
        const unpublishtesti = await Testi.find({ status: 'unpublish' }).count()
        res.json({
            status: helper.status200,
            message: helper.message200,
            bRecord: record,
            tRecord: totaltesti,
            pRecord: publishtesti,
            uRecord: unpublishtesti,
        })
    } catch (error) {
        res.json({
            status: helper.status500,
            message: helper.message500,
        })
    }
}

exports.testidelete = async (req, res) => {
    const id = req.params.id
    try {
        await Testi.findByIdAndDelete(id)
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

exports.testistatus = async (req, res) => {
    const id = req.params.id
    let newstatus = null
    try {
        const check = await Testi.findById(id)
        if (check.status === 'unpublish') {
            newstatus = 'publish'
            await Testi.findByIdAndUpdate(id, { status: newstatus })
        } else {
            newstatus = 'unpublish'
            await Testi.findByIdAndUpdate(id, { status: newstatus })
        }
        res.json({
            status: helper.status200,
            message: helper.message200,
            bRecord: check
        })
    } catch (error) {
        res.json({
            status: helper.status500,
            message: helper.message500,
        })
    }
}