const express = require('express')
const { addimage, getGallery, updateGallery }  = require('../controller/galleryController')
const upload = require('../utils/fileUpload')
const router = express.Router()

router.post('/addimage', upload.single('gallery_image'),addimage)
router.get('/getgallery', getGallery )
router.put('/updategallery/:id',upload.single("gallery_image"),updateGallery)

module.exports = router