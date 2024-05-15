const mongoose = require('mongoose')
const{ObjectId}=mongoose.Schema

const ItenarySchema = new mongoose.Schema({
    days:{
        type: Number,
        // required: true
    },
    day_title:{
        type: String,
        // required: true
    },
    // package:{
    //     type: ObjectId,
    //     ref: "Product",
    //     // required: true
    // }

})
module.exports = mongoose.model("Itenary", ItenarySchema)
