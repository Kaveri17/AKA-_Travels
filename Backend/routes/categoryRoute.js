const express=require('express')
const { addCategory, getAllCategories, getCategoryDetails, updateCategory } = require('../controller/categoryController')
const upload = require('../utils/fileUpload')

const router =express.Router()

router.post('/addcategory',upload.single("category_image"), addCategory)

router.get('/getcategorylist',getAllCategories)
router.get('/getcategorydetails/:id',getCategoryDetails)
router.put('/updatecategory/:id',updateCategory)

module.exports=router