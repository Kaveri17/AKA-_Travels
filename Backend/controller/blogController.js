const Blog = require('../models/blogModel')

exports.addBlog = async(req, res) => {
    let blog = new Blog({
        blog_name: req.body.blog_name
    })
    blog = await blog.save()
    if(!blog) {
        return res.status(400).json({error:"Something went wrong"})
    }
    res.send(blog)

}