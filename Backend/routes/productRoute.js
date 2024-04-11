const express = require('express')
const { addProduct, getAllProducts, getProductDetails, updateProduct, getProductByCategory } = require('../controller/productController')
// const upload=require('../utils/fileUpload')

const router=express.Router()
router.post('/addproduct',addProduct)
router.get('/getproductlist',getAllProducts)
router.get('/getproductdetails/:id',getProductDetails)
router.put('/updateproduct/:id',updateProduct)

router.get('getproductbycategory/:category_id', getProductByCategory)


module.exports=router