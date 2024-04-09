const Blog = require('../models/blogModel')

exports.addBlog = async(req, res) => {
   
       
    // let blog = new Blog({
    //     blog_name: req.body.blog_name
    // })
    // blog = await blog.save()
    // if(!blog) {
    //     return res.status(400).json({error:"Something went wrong"})
    // }
    // res.send(blog)
    // check if blog alreday exists
    
    // return if blog alreday exits
    // if(blog){
      
    //     return res.status(400).json({error: "Blog already exists"})
  
    let blog =await Blog.findOne({blog_name:req.body.blog_name})
  
    if(blog){
        return res.status(400).json({error:"Blog already exists"})
    }
    if(!req.file){
        return res.status(400).json({error:"Please upload image."})
    }

    blog=await Blog.create({

        blog_name:req.body.blog_name,
        blog_description: req.body. blog_description,
        blog_image: req.file.path,
        No_of_views: req.body.No_of_views,
        comments: req.body.comments,
        author_name:req.body.author_name
        
    })
    

    if(!blog){
        return res.status(400).json({error:"Something went wrong"})
    }

    res.send(blog)


}

// to get all Blog
exports.getAllBlog = async(req, res) => {
    let blog = await Blog.find()
    if(!blog){
        return res.status(400).json({error:"Something went wrong"})
    }
    res.send(blog)

}
// to get blog Descriptions

exports.getBlogDescriptions = async(req, res)=> {
    let blog = await Blog.findById(req.params.id)
    if(!blog){
        return res.status(400).json({error: "Something Went Wrong"})
    }
    res.send(blog)
}
// to update a product

exports.updateBlog = async(req, res) => {
    let blog = await Blog.findByIdAndUpdate(req.params.id, {
        
        blog_name:req.body.blog_name,
        blog_description: req.body. blog_description,
        blog_image: req.file?.path,
        No_of_views: req.body.No_of_views,
        comments: req.body.comments,
        author_name:req.body.author_name

    }, 
    {new:true})

if(!blog){
    return res.status(400).json ({error: "Something went wrong"})
}
res.send(blog)
}



