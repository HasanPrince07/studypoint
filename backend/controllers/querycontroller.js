const Query = require('../models/query')
const helper = require('../helper/messages')
const nodemailer = require('nodemailer')


exports.addquery = (req, res) => {
    const { email, number, query } = req.body
    try {
        const record = new Query({ email: email, number: number, query: query })
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

exports.showadminquery = async (req, res) => {
    try {
        const record = await Query.find()
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

exports.querydelete = async (req, res) => {
    const id = req.params.id
    try {
        await Query.findByIdAndDelete(id)
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

exports.showquerybyid = async (req, res) => {
    const id = req.params.id
    try {
        const record = await Query.findById(id)
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

exports.queryreply = async (req, res) => {
    const id = req.params.id
    const { email, from, query, body } = req.body
    try {
        let testAccount = await nodemailer.createTestAccount();
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: from,
                pass: 'lnhdnirlkaopljvc',
            },
        });
        let info = await transporter.sendMail({
            from: from,
            to: email,
            subject: query,
            text: body,
        });
        await Query.findByIdAndUpdate(id, { status: 'send' })
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

exports.status = async (req, res) => {
    const { status } = req.body
    try {
        const record = await Query.find({ status: status })
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