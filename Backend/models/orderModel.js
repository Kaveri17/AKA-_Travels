const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const orderSchema = new mongoose.Schema({
    total: {
        type:Number,
        required: true
    },
    user: {
        type: ObjectId,
        ref: "User",
        required: true
    },
    contact_person:{
        type: String,
        required: true
    },
    contact_number: {
        type:String,
        required:true
    },
    phone_no:{
        type: Number,
        required: true

    },
    status: {
        type:String,
        ref: "Product",
        required:true
    },
    payment_info: {
        type:String
    }
}, {timestamps:true})

module.experts = mongoose.model("Order", orderSchema)