const express = require('express')
const { addimage, getGallery }  = require('../controller/galleryController')
const upload = require('../utils/fileUpload')
const router = express.Router()

router.post('/addimage', upload.single('gallery_image'),addimage)
router.get('/getgallery', getGallery )

module.exports = router