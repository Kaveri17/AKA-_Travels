const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    category_name: {
        type:String,
        required:true
    },
    description:{
        type:String,
       required:true
    },
    
    image:{
        type:String,
        required: true
    },
    


},{timestamps:true})
module.exports=mongoose.model("Category",categorySchema)
    
