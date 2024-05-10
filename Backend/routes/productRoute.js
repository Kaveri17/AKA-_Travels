const express = require('express')
const { addProduct, getAllProducts, getProductDetails, updateProduct, getProductByCategory, deleteProduct } = require('../controller/productController')
// const upload=require('../utils/fileUpload')
const { requireSignin } = require('../controller/userController')
const { productCheck, validation } = require('../validation')
const upload = require('../utils/fileUpload')
const router=express.Router()
router.post('/addproduct',productCheck,validation,requireSignin, addProduct)
router.get('/getproductlist',getAllProducts)
router.get('/getproductdetails/:id',getProductDetails)

router.delete('/deleteproduct/:id',requireSignin, deleteProduct)
router.put('/updateproduct/:id',upload.single("product_image"), updateProduct)

router.get('/getproductbycategory/:category_id', getProductByCategory)


module.exports=router

