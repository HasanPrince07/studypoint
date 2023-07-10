const Signup = require('../models/signup')
const helper = require('../helper/messages')
const nodemailer = require('nodemailer')


exports.updateprofile = async (req, res) => {
    const img = req.file.filename
    const { fname, lname, globalemail } = req.body
    try {
        const record = await Signup.findOne({ email: globalemail })
        const id = record.id
        await Signup.findByIdAndUpdate(id, { fname: fname, lname: lname, email: globalemail, img: img })
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

exports.showprofile = async (req, res) => {
    const { globalemail } = req.body
    try {
        const record = await Signup.findOne({ email: globalemail })
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

exports.changepassword = async (req, res) => {
    const { cpass, npass, globalemail } = req.body
    try {
        const record = await Signup.findOne({ email: globalemail })
        const id = record.id
        if (record.password === cpass) {
            await Signup.findByIdAndUpdate(id, { password: npass })
            res.json({
                status: helper.status200,
                message: helper.message200
            })
        } else {
            res.json({
                status: helper.status500,
                message: 'password do not matched'
            })
        }
    } catch (error) {
        res.json({
            status: helper.status400,
            message: helper.message400
        })
    }
}

exports.sendlink = async (req, res) => {
    const { email, globalemail } = req.body
    try {
        if (email === globalemail) {
            let testAccount = await nodemailer.createTestAccount();
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                auth: {
                    user: 'hasandeveloper07@gmail.com',
                    pass: 'lnhdnirlkaopljvc',
                },
            });
            let info = await transporter.sendMail({
                from: 'hasandeveloper07@gmail.com',
                to: email,
                subject: "password link from studypoint.in",
                text: "Hello world",
                html: `<a href='http://localhost:3000/forgotlink'>click to change password</a>`,
            });
            res.json({
                status: helper.status200,
                message: helper.message200
            })
        } else {
            res.json({
                status: helper.status400
            })
        }
    } catch (error) {
        res.json({
            status: helper.status500,
            message: helper.message500
        })
    }
}
exports.forgotpassword = async (req, res) => {
    const { npass, globalemail } = req.body
    try {
        const record = await Signup.findOne({ email: globalemail })
        const id = record.id
        await Signup.findByIdAndUpdate(id, { password: npass })
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