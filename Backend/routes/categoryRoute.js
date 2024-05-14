const express=require('express')
const { addCategory, getAllCategories, getCategoryDetails, updateCategory, deleteCategory } = require('../controller/categoryController')
const upload = require('../utils/fileUpload')
const { requireSignin } = require('../controller/userController')
const { categoryCheck, validation } = require('../validation')

const router =express.Router()

router.post('/addcategory',upload.single("category_image"), requireSignin,categoryCheck,validation, addCategory)

router.get('/getcategorylist',getAllCategories)
router.get('/getcategorydetails/:id',getCategoryDetails)
router.put('/updatecategory/:id',upload.single("category_image"),updateCategory)
router.delete('/deletecategory/:id',requireSignin,deleteCategory)
// router.put('/updatecategory/:id',requireSignin,upload.single("category_image"),updateCategory)


module.exports=router