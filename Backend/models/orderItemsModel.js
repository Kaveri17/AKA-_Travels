 const mongoose = require('mongoose')
 const { ObjectId } = mongoose.Schema

 const orderItemsSchema = new mongoose.Schema({
    package: {
        type: ObjectId,
        ref: "Product",
        required: true
    },
    No_of_adults: {
        type: Number,
        reuired: true
    },
    No_of_childrens: {
        type: Number,
        required:true

    },
    price_of_children:{
        type: Number,
        required: true
    },
    price_of_adults:{
        type: Number,
        required:true
    }
 }, {timeStamps:true})

module.exports = mongoose.model("OrderItems", orderItemsSchema)