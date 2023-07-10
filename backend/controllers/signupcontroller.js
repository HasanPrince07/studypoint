const Signup = require('../models/signup')
const helper = require('../helper/messages')


exports.signup = async (req, res) => {
    const { email, password } = req.body
    try {
        const recordcheck = await Signup.findOne({ email: email })
        if (recordcheck === null) {
            const record = new Signup({ email: email, password: password })
            record.save()
            res.json({
                status: helper.status201,
                message: helper.message201,
                bRecord: record
            })
        } else {
            res.json({
                status: helper.status400,
                message: 'already',
                bRecord: recordcheck,
            })
        }
    } catch (error) {
        res.json({
            status: helper.status400,
            message: helper.message400,
        })
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body
    try {
        const logincheck = await Signup.findOne({ email: email })
        if (logincheck !== null) {
            if (logincheck.password === password) {
                res.json({
                    status: helper.status200,
                    message: helper.message200,
                    bRecord: logincheck
                })
            } else {
                res.json({
                    status: helper.status400,
                    message: helper.message400
                })
            }
        } else {
            res.json({
                status: helper.status400,
                message: helper.message400
            })
        }
    } catch (error) {
        res.json({
            status: helper.status500,
            message: helper.message500
        })
    }
}