const express = require('express')
const { addPost, getPost, updatePost, deletePost } = require('../controller/postController')

const router = express.Router()
router.post('/addpost',addPost)
router.get('/getpost/:id',getPost)
router.put('/updatepost/:id', updatePost)
router.delete('/deletepost/:id',deletePost)
module.exports = router

