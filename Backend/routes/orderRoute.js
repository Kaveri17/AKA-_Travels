const express = require('express')
const { placeOrder, getAllOrders, getOrderDetails } = require('../controller/orderController')
const router = express.Router()

router.post('/placeorder',placeOrder)
router.get('/getallorders',getAllOrders)
router.get('/getorderdetails/:id',getOrderDetails)

module.exports = router
