const express = require('express')
const { addBlog } = require('../controller/blogController')
const router = express.Router()

router.post('/addblog',addBlog)

module.exports = router