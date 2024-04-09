const express = require('express')
const { addimage }  = require('../controller/galleryController')
const upload = require('../utils/fileUpload')
const router = express.Router()

router.post('/addimage', upload.single('gallery_image'),addimage)

module.exports = router