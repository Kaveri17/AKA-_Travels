const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const gallerySchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    image:{
        type:String,
        required: true
    },

})
module.exports = mongoose.model("gallery", gallerySchema)
