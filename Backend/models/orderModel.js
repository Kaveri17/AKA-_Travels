const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const orderSchema = new mongoose.Schema({
    orderItems: [{
        type: ObjectId,
        ref: "OrderItems",
        required:true
    }],
    total: {
        type: Number,
      
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
       default: "pending"
    },
    payment_info: {
        type:String,
        default: "pending"
    }
}, {timestamps:true})

module.exports = mongoose.model("Order", orderSchema)