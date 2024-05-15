const express=require('express')
const router = require('./productRoute')
const { addItenary, updateItenary, deleteItenary } = require('../controller/itenaryController')


router.post('/additenary/:id',addItenary)
router.put('/updateitenary/:id',updateItenary)
router.delete('/deleteitenary/:id',deleteItenary)

module.exports=router