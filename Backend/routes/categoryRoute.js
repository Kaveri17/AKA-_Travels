const express=require('express')
const { addCategory, getAllCategories, getCategoryDetails, updateCategory, deleteCategory } = require('../controller/categoryController')
const upload = require('../utils/fileUpload')

const router =express.Router()

router.post('/addcategory',upload.single("category_image"), addCategory)

router.get('/getcategorylist',getAllCategories)
router.get('/getcategorydetails/:id',getCategoryDetails)
router.put('/updatecategory/:id',upload.single("category_image"),updateCategory)
router.delete('/deletecategory/:id',deleteCategory)

module.exports=router