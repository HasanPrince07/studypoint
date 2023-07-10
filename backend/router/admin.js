const router = require('express').Router()
const topicC = require('../controllers/topiccontroller')
const sliderC = require('../controllers/slidercontroller')
const coursedetailC = require('../controllers/coursedetailecontroller')
const courseC = require('../controllers/coursecontroller')
const bookC = require('../controllers/bookcontroller')
const testiC = require('../controllers/testicontroller')
const serviceC = require('../controllers/servicecontroller')
const queryC = require('../controllers/querycontroller')
const footerC = require('../controllers/footercontroller')

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/upload')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    },
})

const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 9 }
})

router.get('/showadmintopic', topicC.showadmintopic)
router.post('/addtopic', topicC.addtopic)
router.get('/showtopicbyid/:id', topicC.showtopicbyid)
router.put('/updatetopic/:id', topicC.updatetopic)
router.delete('/topicdelete/:id', topicC.topicdelete)

router.get('/showadminfisrtslider', sliderC.showadminfisrtslider)
router.get('/showadminsecondslider', sliderC.showadminsecondslider)
router.get('/showadminthirdslider', sliderC.showadminthirdslider)
router.get('/firstsliderbyid/:id', sliderC.firstsliderbyid)
router.get('/secondsliderbyid/:id', sliderC.secondsliderbyid)
router.get('/thirdsliderbyid/:id', sliderC.thirdsliderbyid)
router.put('/updatefirstslider/:id', upload.single('file'), sliderC.updatefirstslider)
router.put('/updatesecondslider/:id', upload.single('file'), sliderC.updatesecondslider)
router.put('/updatethirdslider/:id', upload.single('file'), sliderC.updatethirdslider)

router.get('/showadmincoursedetail', coursedetailC.showadmincoursedetail)
router.get('/showcoursedetailbyid/:id', coursedetailC.showadmincoursedetailbyid)
router.put('/updatecoursedetail/:id', coursedetailC.updatecoursedetail)

router.get('/showadminregister', courseC.showadminregister)
router.put('/updaterole/:id', courseC.updaterole)
router.delete('/coursedelete/:id', courseC.coursedelete)

router.get('/adminshowbookdata', bookC.adminshowbookdata)
router.put('/adminupdatebookdataone/:id', bookC.adminupdatebookdataone)
router.get('/adminupdatebookdata/:id', bookC.adminupdatebookdata)

router.get('/adminshowtestidata', testiC.showtestidata)
router.put('/testistatus/:id', testiC.testistatus)
router.delete('/testidelete/:id', testiC.testidelete)

router.post('/addservice', upload.single('file'), serviceC.addservice)
router.get('/showadminservice', serviceC.showadminservice)
router.get('/showservicebyid/:id', serviceC.showservicebyid)
router.put('/updateservice/:id', upload.single('file'), serviceC.updateservice)
router.delete('/servicedelete/:id', serviceC.servicedelete)

router.get('/showadminquery', queryC.showadminquery)
router.get('/showquerybyid/:id', queryC.showquerybyid)
router.delete('/querydelete/:id', queryC.querydelete)
router.put('/queryreply/:id', queryC.queryreply)
router.post('/status', queryC.status)

router.get('/showadminfooter', footerC.showadminfooter)
router.get('/showfooterbyid/:id', footerC.showfooterbyid)
router.put('/updatefooter/:id', footerC.updatefooter)



module.exports = router