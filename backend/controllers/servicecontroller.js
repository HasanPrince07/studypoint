const Service = require('../models/service')
const helper = require('../helper/messages')


exports.showservice = async (req, res) => {
    try {
        const record = await Service.find()
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

exports.showmoredetaile = async (req, res) => {
    const id = req.params.id
    try {
        const record = await Service.findById(id)
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

exports.addservice = (req, res) => {
    const simg = req.file.filename
    const { sname, sdesc, sldesc } = req.body
    try {
        const record = new Service({ sname: sname, sdesc: sdesc, sldesc: sldesc, simg: simg })
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

exports.showadminservice = async (req, res) => {
    try {
        const record = await Service.find()
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

exports.showservicebyid = async (req, res) => {
    const id = req.params.id
    try {
        const record = await Service.findById(id)
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

exports.updateservice = async (req, res) => {
    const id = req.params.id
    const simg = req.file.filename
    const { sname, sdesc, sldesc } = req.body
    try {
        await Service.findByIdAndUpdate(id, { sname: sname, sdesc: sdesc, sldesc: sldesc, simg: simg })
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

exports.servicedelete = async (req, res) => {
    const id = req.params.id
    try {
        await Service.findByIdAndDelete(id)
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