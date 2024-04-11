const express = require('express')
const {register, verifyEmail, resendVerification, forgetpassword, resetPassword, signin, signout, getUsersList, getSingleUserDetails, updateUser, findUserByEmail, findUserByUsername} = require('../controller/userController')
const router = express.Router()

router.post('/register', register)
router.get('/verify/:token',verifyEmail)
router.post('/resendverification',resendVerification)
router.post('/forgetpassword',forgetpassword)
router.post('/resetpassword/:token',resetPassword)
router.post('/login', signin)
router.get('/signout',signout)
router.get('/getuserslist', getUsersList)
router.get('/getsingleuserdetails/:id', getSingleUserDetails)
router.put('/updateuser/:id',updateUser)
router.post('/finduserbyemail',findUserByEmail)
router.post('/finduserbyusername',findUserByUsername)

module.exports = router