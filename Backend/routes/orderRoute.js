const express = require('express')
const { placeOrder } = require('../controller/orderController')
const router = express.Router()

router.post('/placeorder',placeOrder)

module.exports = router
