const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    blog_name:{
        type: String,
        required: true
    },
    blog_description:{
        type: String,
        // required:true
    },
    blog_image:{
        type: String,
        // required: true
    },
    No_of_views: {
        type:Number,
        // required:true
    },
    comments: {
        type:String,
        // required: true
    },
    author_name: {
        type: String,
       
    }
    



},{timestamps: true})
module.exports = mongoose.model("Blog", blogSchema)