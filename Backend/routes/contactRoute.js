const express = require('express')
const { submitMessage, getAllMessage, getMessage } = require('../controller/contactController')

const router = express.Router()

router.post('/submitmessage', submitMessage)
router.get('/getallmessage', getAllMessage)
router.get('/getmessage/:id', getMessage)

module.exports=router




















