const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const blogSchema = mongoose.Schema({
    blog_name:{
        type: String,
        required: true
    },
    blog_description:{
        type: String,
         required:true
    },
    blog_image:{
        type: String,
         required: true
    },
    No_of_views: {
        type:Number,
         default: 0
    },
    author_name: {
        type: String,
        required: true
       
    },
    author_word: {
        type: String,
        required: true
    },
    blog_person : {
        type: String,
        // required: true
       
    },
    blog_det_desc: {
        type: String,
        required: true

    },
    comment:[{
        type: ObjectId,
        ref: "Post",
        // required: true
    }],
},{timestamps: true})
module.exports = mongoose.model("Blog", blogSchema)