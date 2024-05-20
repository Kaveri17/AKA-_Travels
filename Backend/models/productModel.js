const mongoose=require('mongoose')
const{ObjectId}=mongoose.Schema

const productSchema=mongoose.Schema({
    product_title:{
        type:String,
        required:true
    },
    product_location:{
        type:String,
        required:true
    },
    accomodation:{
        type:String,
        required:true

    },
    maximum_altitude:{
        type:String,
        required:true
    },
    best_season:{
        type:String,
        required:true

    },
   departure_city:{
        type:String,
        // required:true

    },
   transportation:{
        type:String,
        // required:true

    },
    tour_availability:{
        type:String,
        required:true

    },
    language:{
        type:String,
        required:true
    },
    wifi:{
        type:String,
        required:true

    },
   minimum_age:{
        type:Number,
        required:true

    },
    maximum_age:{
        type:Number,
        // required:true
    },
    meals:{
        type:String,
        required:true

    },
    overview:{
        type:String,
        required:true
    },
    highlights:{
        type:String,
        required:true
    },

    product_image:{
        type:String,
        // required:true
        
    },
    price:{
        type:Number,
        // required:true
    },
    product_people:{
        type:String,
        // required:true
    },
    cost:{
        type:String,
        // required:true

    },
    strike:{
        type:Number,
        // required:true
    },
    day:{
        type:Number,
        // required:true
    },

    
    category: {
        type: ObjectId,
        ref: "Category",
        required: true

    },
    itenary:[{
        type: ObjectId,
        ref: "Itenary",
        // required: true
    }],
},{timestamps:true})
module.exports=mongoose.model("Product",productSchema)


    
    




    


