const express = require('express')
const { placeOrder, getAllOrders, getOrderDetails, getUserOrders, updateOrder, deleteOrder } = require('../controller/orderController')
const router = express.Router()

router.post('/placeorder',placeOrder)
router.get('/getallorders',getAllOrders)
router.get('/getorderdetails/:id',getOrderDetails)
router.get('/getuserorders/:user_id', getUserOrders)
router.put('/updateorder/:id',updateOrder)
router.delete('/deleteorder/:id',deleteOrder)
module.exports = router
