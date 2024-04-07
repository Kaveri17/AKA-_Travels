const express = require('express')

const upload = require('../utils/fileUpload')
const { addimage } = require('../controller/galleryController')





router.post('/addimage',addimage,upload('gallery_image'))