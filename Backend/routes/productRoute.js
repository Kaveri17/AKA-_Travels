const express = require('express')
const { addProduct, getAllProducts, getProductDetails, updateProduct } = require('../controller/productController')
// const upload=require('../utils/fileUpload')
const { updateCategory } = require('../controller/categoryController')
const router=express.Router()
router.post('/addproduct',addProduct)
router.get('/getproductlist',getAllProducts)
router.get('/getproductdetails/:id',getProductDetails)
router.put('/updateproduct/:id',updateProduct)

module.exports=router
