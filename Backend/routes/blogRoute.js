const express = require('express')
const { addBlog, getAllBlog, getBlogDescriptions, updateBlog, } = require('../controller/blogController')
const upload = require('../utils/fileUpload')
const router = express.Router()

router.post('/addblog', upload.single("blog_images"), addBlog)
router.get('/getblog',getAllBlog)
router.get('/getdescriptions/:id',getBlogDescriptions)
router.put('/updateblog/:id', upload.single("blog_images"), updateBlog)
module.exports = router