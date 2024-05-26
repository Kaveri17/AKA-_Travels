const mongoose = require('mongoose')
const{ObjectId}=mongoose.Schema

const postSchema = mongoose.Schema({
    post_comment: {
        type: String,
        required: true
    },
    post_name : {
        type: String,
        required: true
    },
    post_email: {
        type: String,
        required: true
    },
    blog:{
            type: ObjectId,
            ref: "Blog",
    }
}, {timestamps: true})
module.exports = mongoose.model("Post",postSchema)