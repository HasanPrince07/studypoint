const Sliderone = require('../models/sliderone')
const Slidertwo = require('../models/slidertwo')
const Sliderthree = require('../models/sliderthree')
const helper = require('../helper/messages')

exports.showsliderone = async (req, res) => {
    try {
        const record = await Sliderone.findOne()
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

exports.showslidertwo = async (req, res) => {
    try {
        const record = await Slidertwo.findOne()
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

exports.showsliderthree = async (req, res) => {
    try {
        const record = await Sliderthree.findOne()
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

exports.showadminfisrtslider = async (req, res) => {
    try {
        const record = await Sliderone.findOne()
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

exports.showadminsecondslider = async (req, res) => {
    try {
        const record = await Slidertwo.findOne()
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

exports.showadminthirdslider = async (req, res) => {
    try {
        const record = await Sliderthree.findOne()
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

exports.firstsliderbyid = async (req, res) => {
    const id = req.params.id
    try {
        const record = await Sliderone.findById(id)
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

exports.secondsliderbyid = async (req, res) => {
    const id = req.params.id
    try {
        const record = await Slidertwo.findById(id)
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

exports.thirdsliderbyid = async (req, res) => {
    const id = req.params.id
    try {
        const record = await Sliderthree.findById(id)
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

exports.updatefirstslider = async (req, res) => {
    const id = req.params.id
    const img = req.file.filename
    const { text } = req.body
    try {
        await Sliderone.findByIdAndUpdate(id, { text: text, img: img })
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

exports.updatesecondslider = async (req, res) => {
    const id = req.params.id
    const img = req.file.filename
    const { numberone, textone, txtone, numbertwo, texttwo, txttwo, numberthree, textthree, txtthree, numberfour, textfour, txtfour } = req.body
    try {
        await Slidertwo.findByIdAndUpdate(id, { numberone: numberone, textone: textone, txtone: txtone, numbertwo: numbertwo, texttwo: texttwo, txttwo: txttwo, numberthree: numberthree, textthree: textthree, txtthree: txtthree, numberfour: numberfour, textfour: textfour, txtfour: txtfour, img: img })
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

exports.updatethirdslider = async (req, res) => {
    const id = req.params.id
    const img = req.file.filename
    const { headingone, textone, headingtwo, texttwo } = req.body
    try {
        await Sliderthree.findByIdAndUpdate(id, { headingone: headingone, textone: textone, headingtwo: headingtwo, texttwo: texttwo, img: img })
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