const router = require('express').Router()
const signupC = require('../controllers/signupcontroller')
const topicC = require('../controllers/topiccontroller')
const sliderC = require('../controllers/slidercontroller')
const bookC = require('../controllers/bookcontroller')
const testiC = require('../controllers/testicontroller')
const serviceC = require('../controllers/servicecontroller')
const queryC = require('../controllers/querycontroller')
const courseC = require('../controllers/coursecontroller')
const profileC = require('../controllers/profilecontroller')
const coursedetailC = require('../controllers/coursedetailecontroller')
const footerC = require('../controllers/footercontroller')

const multer = require('multer')
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/upload')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})
let upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 9 }
})

router.post('/signup', signupC.signup)
router.post('/login', signupC.login)

router.get('/showtopic', topicC.showtopic)

router.get('/showsliderone', sliderC.showsliderone)
router.get('/showslidertwo', sliderC.showslidertwo)
router.get('/showsliderthree', sliderC.showsliderthree)

router.get('/showbookdata', bookC.showbookdata)

router.put('/updateprofile', upload.single('file'), profileC.updateprofile)
router.post('/showprofile', profileC.showprofile)
router.put('/changepassword', profileC.changepassword)
router.post('/sendlink', profileC.sendlink)
router.put('/forgotpassword', profileC.forgotpassword)

router.get('/showcoursedetaile', coursedetailC.showcoursedetail)

router.post('/addcourse', courseC.addcourse)
router.post('/modulecheck', courseC.modulecheck)

router.post('/addtesti', upload.single('file'), testiC.addtesti)
router.get('/showtesti', testiC.showtesti)

router.get('/showservice', serviceC.showservice)
router.get('/showmoredetaile/:id', serviceC.showmoredetaile)
router.post('/addquery', queryC.addquery)

router.get('/showfooter', footerC.showfooter)


module.exports = router