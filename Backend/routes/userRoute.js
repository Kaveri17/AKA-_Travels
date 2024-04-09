const express = require('express')
const {register, verifyEmail, resendVerification, forgetpassword, resetPassword} = require('../controller/userController')
const router = express.Router()

router.post('/register', register)
router.get('/verify/:token',verifyEmail)
router.post('/resendverification',resendVerification)
router.post('/forgetpassword',forgetpassword)
router.post('/resetpassword/:token',resetPassword)

module.exports = router