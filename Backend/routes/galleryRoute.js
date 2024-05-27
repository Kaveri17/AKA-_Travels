const express = require('express')
const { addimage, getGallery, updateGallery, getGalleryDetails, deleteGallery }  = require('../controller/galleryController')
const upload = require('../utils/fileUpload')
const router = express.Router()

router.post('/addimage', upload.single('gallery_image'),addimage)
router.get('/getgallery', getGallery )
router.get('/getgallerydetails/:id',getGalleryDetails)
router.put('/updategallery/:id',upload.single("gallery_image"),updateGallery)
router.delete('/deletegallery/:id',upload.single("gallery_image"),deleteGallery)
module.exports = router