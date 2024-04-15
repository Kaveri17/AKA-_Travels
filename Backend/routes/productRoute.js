const express = require('express')
const { addProduct, getAllProducts, getProductDetails, updateProduct, getProductByCategory, deleteProduct } = require('../controller/productController')
// const upload=require('../utils/fileUpload')
const { requireSignin } = require('../controller/userController')
const { productCheck, validation } = require('../validation')
const router=express.Router()
router.post('/addproduct',productCheck,validation,requireSignin, addProduct)
router.get('/getproductlist',getAllProducts)
router.get('/getproductdetails/:id',getProductDetails)
router.put('/updateproduct/:id',updateProduct)
router.delete('/deleteproduct/:id',deleteProduct)
router.put('/updateproduct/:id',requireSignin, updateProduct)

router.get('/getproductbycategory/:category_id', getProductByCategory)


module.exports=router

