const express = require('express')
const { submitMessage } = require('../controller/contactController')

const router = express.Router()

router.post('/submitmessage', submitMessage)

module.exports=router