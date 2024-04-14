const express = require('express')
const { addProduct, getAllProducts, getProductDetails, updateProduct, getProductByCategory } = require('../controller/productController')
// const upload=require('../utils/fileUpload')
const { requireSignin } = require('../controller/userController')
const router=express.Router()
router.post('/addproduct',requireSignin, addProduct)
router.get('/getproductlist',getAllProducts)
router.get('/getproductdetails/:id',getProductDetails)
router.put('/updateproduct/:id',requireSignin, updateProduct)

router.get('/getproductbycategory/:category_id', getProductByCategory)


module.exports=router