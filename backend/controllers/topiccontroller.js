const Topic = require('../models/topic')
const helper = require('../helper/messages')

exports.showtopic = async (req, res) => {
    try {
        const record = await Topic.find()
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

exports.showadmintopic = async (req, res) => {
    try {
        const record = await Topic.find()
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

exports.addtopic = (req, res) => {
    const { name, video } = req.body
    try {
        const record = new Topic({ name: name, video: video })
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

exports.showtopicbyid = async (req, res) => {
    const id = req.params.id
    try {
        const record = await Topic.findById(id)
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

exports.updatetopic = async (req, res) => {
    const id = req.params.id
    const { name, video } = req.body
    try {
        await Topic.findByIdAndUpdate(id, { name: name, video: video })
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

exports.topicdelete = async (req, res) => {
    const id = req.params.id
    try {
        await Topic.findByIdAndDelete(id)
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