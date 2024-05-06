const mongoose = require('mongoose')

const popularSchema = mongoose.Schema({
    popular_name: {
        type:String,
        required:true
    },
    description:{
        type:String,
       
       
    },
    
    popular_image:{
        type:String,
        required: true
    }


},{timestamps:true})
module.exports=mongoose.model("Popular",popularSchema)
    
