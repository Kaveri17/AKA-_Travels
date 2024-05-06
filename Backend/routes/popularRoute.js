const express=require('express')
const upload = require('../utils/fileUpload')
const { addPopular, getAllPopulars, getPopularDetails, deletePopular, updatePopular } = require('../controller/popularController')
// const router = require('./categoryRoute')








const router=express.Router()
router.post('/addpopular',upload.single("popular_image"),addPopular)
router.get('/getpopularlist',getAllPopulars)
router.get('/getpopulardetails/:id',getPopularDetails)
router.delete('/deletepopular/:id',deletePopular)
router.put('/updatepopular/:id',upload.single("popular_image"),updatePopular)
module.exports=router