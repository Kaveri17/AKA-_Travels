const mongoose = require('mongoose')

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
    }
}, {timestamps: true})
module.exports = mongoose.model("Post",postSchema)