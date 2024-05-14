const express = require('express')
const { addPost, getPost, updatePost, deletePost } = require('../controller/postController')
const { requireSignin } = require('../controller/userController')

const router = express.Router()
router.post('/addpost',addPost)
router.get('/getpost',getPost)
// router.put('/updatepost/:id', requireSignin,updatePost)
// router.delete('/deletepost/:id',requireSignin,deletePost)
router.put('/updatepost/:id', updatePost)
router.delete('/deletepost/:id',deletePost)
module.exports = router

